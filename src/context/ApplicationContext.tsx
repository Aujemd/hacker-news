import React, { useState } from "react";
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

  
  const addFave = (newFave: Post) => {
    setSavedFaves((savedFaves) => {
      const newFaves = [...savedFaves, newFave];
      window.localStorage.setItem("savedFaves", JSON.stringify(newFaves));
      return newFaves;
    });
  };

  const removeFave = (faveToDelete: Post) => {
    setSavedFaves((savedFaves) => {
      const newFaves = savedFaves.filter(
        (fave) => fave.objectID !== faveToDelete.objectID
      );
      window.localStorage.setItem("savedFaves", JSON.stringify(newFaves));
      return newFaves;
    });
  };

  const saveFilter = (filter: string) => {
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
