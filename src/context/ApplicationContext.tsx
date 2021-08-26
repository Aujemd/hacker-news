//React
import React, { useState } from "react";

//Types
import { Post } from "../hooks/useData";

type ApplicationContextType = {
  children: JSX.Element;
};

type UseApplicationContext = {
  savedFaves: Array<Post>;
  savedFilter: string;
  addFave: Function;
  removeFave: Function;
  saveFilter: Function;
};

const Context = React.createContext<UseApplicationContext>({
  savedFaves: [],
  savedFilter: "",
  addFave: () => {},
  removeFave: () => {},
  saveFilter: () => {},
});

const ApplicationContext = ({ children }: ApplicationContextType) => {
  //Local states
  const [savedFaves, setSavedFaves] = useState<Array<Post>>(
    window.localStorage.getItem("savedFaves") //@ts-ignore
      ? JSON.parse(window.localStorage.getItem("savedFaves"))
      : []
  );

  const [savedFilter, setSavedFilter] = useState<string>(
    window.localStorage.getItem("savedFilter") //@ts-ignore
      ? JSON.parse(window.localStorage.getItem("savedFilter"))
      : ""
  );

  //Methods
  /**
   * addFave
   * * Add new fave post to context and localstorage
   * @param newFave The fave to save
   */
  const addFave = (newFave: Post): void => {
    setSavedFaves((savedFaves) => {
      const newFaves = [...savedFaves, newFave];
      window.localStorage.setItem("savedFaves", JSON.stringify(newFaves));
      return newFaves;
    });
  };

  /**
   * removeFave
   * * Remove a fave post to context and localstorage
   * @param faveToDelete the fave to delete
   */
  const removeFave = (faveToDelete: Post): void => {
    setSavedFaves((savedFaves) => {
      const newFaves = savedFaves.filter(
        (fave) => fave.objectID !== faveToDelete.objectID
      );
      window.localStorage.setItem("savedFaves", JSON.stringify(newFaves));
      return newFaves;
    });
  };

  /**
   * saveFilter
   * * Save a filter in context and localstorage
   * @param filter Filter to save ;
   */
  const saveFilter = (filter: string): void => {
    window.localStorage.setItem("savedFilter", JSON.stringify(filter));
    setSavedFilter(filter);
  };

  return (
    <Context.Provider
      value={{
        savedFaves,
        savedFilter,
        addFave,
        removeFave,
        saveFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useApplicationContext = (): UseApplicationContext => {
  return React.useContext(Context);
};

export default ApplicationContext;
