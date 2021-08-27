//React
import { FC } from "react";

//Router
import { Link, useRouteMatch } from "react-router-dom";

//Styles
import "./styles.scss";

//Types
type NavitemProps = {
  to: string;
  label: string;
  activeOnlyWhenExact: boolean;
};

export const Navitem: FC<NavitemProps> = ({
  to,
  label,
  activeOnlyWhenExact,
}) => {
  //Local states
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <Link className={match ? "navitem__link--active" : "navitem__link"} to={to}>
      <li className={match ? "navitem--active" : "navitem"}>{label}</li>
    </Link>
  );
};
