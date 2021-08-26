//Components
import Select from "react-select";

//styles
import "./styles.scss";

//Context
import { useSavedFaves } from "../../context/SavedFavesContext";

//Utils
import {
  filterSelectOptions,
  getFilterSelectOption,
} from "../../utils/FilterSelectOptions";

export const FilterSelect = () => {
  const { savedFilter, saveFilter } = useSavedFaves();

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
