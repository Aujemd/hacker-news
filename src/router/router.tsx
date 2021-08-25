//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import { Navbar } from "../components/Navbar/Navbar";

//Pages
import { MyFaves } from "../pages/MyFaves/myFaves";
import { Home } from "../pages/Home/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route exact path="/faves" render={() => <MyFaves />}></Route>
      </Switch>
    </BrowserRouter>
  );
};
