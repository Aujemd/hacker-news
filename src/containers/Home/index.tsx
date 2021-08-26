//React
import { FC } from "react";

//Components
import { CommonContainer } from "../common/index";
import { Card } from "../../components/Card/Card";
import { FilterSelect } from "../../components/FilterSelect/FilterSelect";

//styles
import "./styles.scss";

//hooks
import { useData } from "../../hooks/useData";

//context
import { useSavedFaves } from "../../context/SavedFavesContext";
export const Index: FC = () => {
  const { savedFilter } = useSavedFaves();

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
