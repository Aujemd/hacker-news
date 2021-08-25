//React
import { FC, useEffect } from "react";

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
const mockups = [{}, {}, {}, {}, {}, {}];

export const Index: FC = () => {
  const [data, loading] = useData("reactjs", 0);

  useEffect(() => {
    console.log(data, loading);
  }, [loading]);

  return (
    <>
      <FilterSelect options={filterSelectOptions} />
      <CommonContainer className="commonContainer">
        {mockups.map((index) => (
          <Card />
        ))}
      </CommonContainer>
    </>
  );
};
