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
const mockups = [{}, {}, {}, {}, {}, {}];

export const Index: FC = () => {
  return (
    <>
      <FilterSelect options={filterSelectOptions} />
      <CommonContainer className="commonContainer">
        {mockups.map(() => (
          <Card />
        ))}
      </CommonContainer>
    </>
  );
};
