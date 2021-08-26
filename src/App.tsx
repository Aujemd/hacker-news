import React from "react";

//Router
import { Router } from "../src/router/router";

//Components
import { Header } from "./components/Header/Header";

//Context
import SavedFavesContext from "./context/SavedFavesContext";

function App() {
  return (
    <>
      <Header />
      <SavedFavesContext>
        <Router />
      </SavedFavesContext>
    </>
  );
}

export default App;
