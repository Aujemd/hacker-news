//React
import { FC } from "react";

//Router
import { Link, useRouteMatch } from "react-router-dom";

import "./styles.scss";

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
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <li className={match ? "navitem--active" : "navitem"}>
      <Link
        className={match ? "navitem__link--active" : "navitem__link"}
        to={to}
      >
        {label}
      </Link>
    </li>
  );
};
