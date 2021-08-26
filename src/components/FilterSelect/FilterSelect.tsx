//React
import { FC } from "react";

//Components
import Select from "react-select";

//Styles
import "./styles.scss";

//Context
import { useApplicationContext } from "../../context/ApplicationContext";

//Utils
import {
  filterSelectOptions,
  getFilterSelectOption,
} from "../../utils/FilterSelectOptions";

export const FilterSelect: FC = () => {
  //Local states
  const { savedFilter, saveFilter } = useApplicationContext();

  //Methods
  /**
   * handleChange
   * * Save the filter selected when select change
   * @param e event from change of select
   */
  const handleChange = (e: any): void => {
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
