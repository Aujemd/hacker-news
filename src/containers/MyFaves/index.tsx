//React
import { FC } from "react";

//Components
import { CommonContainer } from "../common/index";
import { Card } from "../../components/Card/Card";

//Styles
import "./styles.scss";

//Context
import { useApplicationContext } from "../../context/ApplicationContext";

export const Index: FC = () => {
  //Context State
  const { savedFaves } = useApplicationContext();

  return (
    <>
      <CommonContainer className="commonContainer myFaves__container">
        {savedFaves.map((post, index) => {
          const { objectID, author, story_url, story_title, created_at } = post;
          return (
            <Card
              key={objectID + index}
              author={author}
              story_url={story_url}
              story_title={story_title}
              created_at={created_at}
              objectID={objectID}
            />
          );
        })}
      </CommonContainer>
    </>
  );
};
