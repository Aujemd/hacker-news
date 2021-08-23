import React from "react";
import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <img
        src="/assets/images/hacker-news.svg"
        alt="Hacker news logo"
        className="header__logo"
      />
    </header>
  );
};
