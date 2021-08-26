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
        {savedFaves.map(
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
