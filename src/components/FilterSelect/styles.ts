//Constants to override Select styles

export const FilterSelectStyles = {
  menuList: (provided: any, state: any) => ({
    ...provided,
    padding: 0,
    margin: 0,
    overflow: "hidden",
  }),

  option: (provided: any, state: { isSelected: any }) => ({
    ...provided,
    padding: 0,
    margin: 0,
    height: "46px",
    background: state.isSelected ? "#eaeaea" : "#ffffff",
  }),
};
