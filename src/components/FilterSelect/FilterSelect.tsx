//React
import { FC } from "react";

//Components
import Select from "react-select";

//styles
import "./styles.scss";

//types
type Option = {
  value: string;
  label: any;
};

type FilterSelectProps = {
  options: Array<Option>;
};

export const FilterSelect: FC<FilterSelectProps> = ({ options }) => {
  return (
    <Select
      isSearchable={false}
      options={options}
      className="filterSelect react-select__control"
      placeholder="Select Your News"
      classNamePrefix="react-select"
    ></Select>
  );
};
