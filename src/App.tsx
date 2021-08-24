import React from "react";

//Router
import { Router } from "../src/router/router";

//Components
import { Header } from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Router />
    </>
  );
}

export default App;
