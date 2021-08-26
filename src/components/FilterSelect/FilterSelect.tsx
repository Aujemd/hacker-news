//Components
import Select from "react-select";

//styles
import "./styles.scss";

//Context
import { useApplicationContext } from "../../context/ApplicationContext";

//Utils
import {
  filterSelectOptions,
  getFilterSelectOption,
} from "../../utils/FilterSelectOptions";

export const FilterSelect = () => {
  const { savedFilter, saveFilter } = useApplicationContext();

  const handleChange = (e: any) => {
    saveFilter(e.value);
  };

  return (
    <Select
      value={getFilterSelectOption(savedFilter)}
      onChange={handleChange}
      isSearchable={false}
      options={filterSelectOptions}
      className="filterSelect react-select__control"
      placeholder="Select Your News"
      classNamePrefix="react-select"
    ></Select>
  );
};
