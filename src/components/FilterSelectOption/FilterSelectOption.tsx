//React
import { FC } from "react";

//Styles
import "./styles.scss";

//types
type FilterSelectOptionProps = {
  label: string;
  src: string;
  srcset: string;
};

export const FilterSelectOption: FC<FilterSelectOptionProps> = ({
  label,
  src,
  srcset,
}) => {
  return (
    <div className="react-select__option">
      <img
        src={src}
        srcSet={srcset}
        alt="Option"
        className="react-select__option__img"
      />
      <p className="react-select__option__text">{label}</p>
    </div>
  );
};
