//components
import { FilterSelectOption } from "../components/FilterSelectOption/FilterSelectOption";

export const filterSelectOptions = [
  {
    value: "angular",
    label: (
      <FilterSelectOption
        label="Angular"
        src="assets/images/image-138.png"
        srcset="assets/images/image-138@2x.png 2x, assets/images/image-138@3x.png 3x"
      />
    ),
  },
  {
    value: "reactjs",
    label: (
      <FilterSelectOption
        label="React.js"
        src="assets/images/image-140.png"
        srcset="assets/images/image-140@2x.png 2x, assets/images/image-140@3x.png 3x"
      />
    ),
  },
  {
    value: "vuejs",
    label: (
      <FilterSelectOption
        label="Vue.js"
        src="assets/images/image-141.png"
        srcset="assets/images/image-141@2x.png 2x, assets/images/image-141@3x.png 3x"
      />
    ),
  },
];

export const getFilterSelectOption = (filter: string) => {
  switch (filter) {
    case "angular":
      return filterSelectOptions[0];
    case "reactjs":
      return filterSelectOptions[1];
    case "vuejs":
      return filterSelectOptions[2];
    default:
      return null;
  }
};
