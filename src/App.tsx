import React from "react";

//Router
import { Router } from "../src/router/router";

//Components
import { Header } from "./components/Header/Header";

//Context
import ApplicationContext from "./context/ApplicationContext";

function App() {
  return (
    <>
      <Header />
      <ApplicationContext>
        <Router />
      </ApplicationContext>
    </>
  );
}

export default App;
