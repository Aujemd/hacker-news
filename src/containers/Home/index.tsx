//React
import { FC, useRef, useCallback, useState, useEffect } from "react";

//Components
import { CommonContainer } from "../common/index";
import { Card } from "../../components/Card/Card";
import { FilterSelect } from "../../components/FilterSelect/FilterSelect";
import { Loader } from "../../components/Loader/Loader";

//Styles
import "./styles.scss";

//hooks
import { useData } from "../../hooks/useData";

//Context
import { useApplicationContext } from "../../context/ApplicationContext";

//Utils
import { ID } from "../../utils/Common";
export const Index: FC = () => {
  //Local states
  const { savedFilter } = useApplicationContext();
  const [page, setPage] = useState<number>(0);
  const { data, hasMore, loading, error } = useData(savedFilter, page);
  const observer = useRef(null) as any;
  const lastPostElementRef = useCallback(
    (node): void => {
      if (loading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  //Lifecycle
  useEffect(() => {
    if (data.length === 0 && !loading && !error) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [data, loading, error]);

  useEffect(() => {
    setPage((prevPage) => 0);
  }, [savedFilter]);

  return (
    <>
      <FilterSelect />
      <CommonContainer className="commonContainer">
        {data.map((post, index) => {
          const { objectID, author, story_url, story_title, created_at } = post;
          if (data.length === index + 1) {
            return (
              <span ref={lastPostElementRef} key={ID()} className="card--last">
                <Card
                  author={author}
                  story_url={story_url}
                  story_title={story_title}
                  created_at={created_at}
                  objectID={objectID}
                />
              </span>
            );
          } else {
            return (
              <Card
                key={ID()}
                author={author}
                story_url={story_url}
                story_title={story_title}
                created_at={created_at}
                objectID={objectID}
              />
            );
          }
        })}
        {loading && <Loader />}
        {error && <p>Something come bad, try later</p>}
      </CommonContainer>
    </>
  );
};
