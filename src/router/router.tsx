import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import { Navbar } from "../components/Navbar/Navbar";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/home"></Route>
        <Route path="/faves"></Route>
      </Switch>
    </BrowserRouter>
  );
};
