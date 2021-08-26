import React, { useState } from "react";
import { Post } from "../hooks/useData";

type SavedFavesContextType = {
  children: JSX.Element;
};

type UseSavedFaves = {
  savedFaves: Array<Post>;
  savedFilter: string;
  addSavedFave: Function;
  removeSavedFave: Function;
  saveFilter: Function;
};

const Context = React.createContext<UseSavedFaves>({
  savedFaves: [],
  savedFilter: "",
  addSavedFave: () => {},
  removeSavedFave: () => {},
  saveFilter: () => {},
});

const SavedFavesContext = ({ children }: SavedFavesContextType) => {
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

  const addSavedFave = (newFave: Post) => {
    setSavedFaves((savedFaves) => {
      const newFaves = [...savedFaves, newFave];
      window.localStorage.setItem("savedFaves", JSON.stringify(newFaves));
      return newFaves;
    });
  };

  const removeSavedFave = (faveToDelete: Post) => {
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
        addSavedFave,
        removeSavedFave,
        saveFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useSavedFaves = (): UseSavedFaves => {
  return React.useContext(Context);
};

export default SavedFavesContext;
