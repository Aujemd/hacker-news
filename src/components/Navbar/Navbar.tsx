import { FC } from "react";

//Components
import { Navitem } from "../NavItem/Navitem";

//styles
import "./styles.scss";

//Utils
import { RouterItems } from "../../utils/RouterItems";

export const Navbar: FC = () => {
  return (
    <nav>
      <ul className="navbar__list">
        {RouterItems.map(({ to, label }) => (
          <Navitem to={to} label={label} activeOnlyWhenExact />
        ))}
      </ul>
    </nav>
  );
};
