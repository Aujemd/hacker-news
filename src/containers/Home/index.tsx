//React
import { FC } from "react";

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
  const { data } = useData(savedFilter, 0);

  return (
    <>
      <FilterSelect />
      <CommonContainer className="commonContainer">
        {data.map(
          ({ objectID, author, story_url, story_title, created_at }) => (
            <Card
              key={objectID}
              author={author}
              story_url={story_url}
              story_title={story_title}
              created_at={created_at}
              objectID={objectID}
            />
          )
        )}
      </CommonContainer>
    </>
  );
};
