//React
import { FC } from "react";

//Styles
import "./styles.css";

export const Loader: FC = () => {
  return (
    <div className="loader__container">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
