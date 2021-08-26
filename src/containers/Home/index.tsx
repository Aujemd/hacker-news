//React
import { FC, useRef, useCallback, useState } from "react";

//Components
import { CommonContainer } from "../common/index";
import { Card } from "../../components/Card/Card";
import { FilterSelect } from "../../components/FilterSelect/FilterSelect";

//Styles
import "./styles.scss";

//hooks
import { useData } from "../../hooks/useData";

//Context
import { useApplicationContext } from "../../context/ApplicationContext";
export const Index: FC = () => {
  //Local states
  const { savedFilter } = useApplicationContext();
  const [page, setPage] = useState<number>(0);
  const { data, hasMore, loading } = useData(savedFilter, page);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, hasMore]
  );
  return (
    <>
      <FilterSelect />
      <CommonContainer className="commonContainer">
        {data.map((post, index) => {
          const { objectID, author, story_url, story_title, created_at } = post;
          if (data.length === index + 1) {
            return (
              <span ref={lastPostElementRef} key={objectID}>
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
                key={objectID}
                author={author}
                story_url={story_url}
                story_title={story_title}
                created_at={created_at}
                objectID={objectID}
              />
            );
          }
        })}
        {<div>{loading && "Cargando ..."}</div>}
      </CommonContainer>
    </>
  );
};
