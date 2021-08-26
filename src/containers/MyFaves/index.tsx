//Components
import { CommonContainer } from "../common/index";
import { Card } from "../../components/Card/Card";

//styles
import "./styles.scss";

//Context
import { useApplicationContext } from "../../context/ApplicationContext";
export const Index = () => {
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
