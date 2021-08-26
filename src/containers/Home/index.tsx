//React
import { FC } from "react";

//Components
import { CommonContainer } from "../common/index";
import { Card } from "../../components/Card/Card";
import { FilterSelect } from "../../components/FilterSelect/FilterSelect";

//styles
import "./styles.scss";

//Utils
import { filterSelectOptions } from "../../utils/FilterSelectOptions";

//hooks
import { useData } from "../../hooks/useData";

export const Index: FC = () => {
  const { data } = useData("reactjs", 0);

  return (
    <>
      <FilterSelect options={filterSelectOptions} />
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
