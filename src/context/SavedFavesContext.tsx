import React, { useState } from "react";
import { Post } from "../hooks/useData";

type SavedFavesContextType = {
  children: JSX.Element;
};

type UseSavedFaves = {
  savedFaves: Array<Post>;
  addSavedFave: Function;
  removeSavedFave: Function;
};

const Context = React.createContext<UseSavedFaves>({
  savedFaves: [],
  addSavedFave: () => {},
  removeSavedFave: () => {},
});

const SavedFavesContext = ({ children }: SavedFavesContextType) => {
  const [savedFaves, setSavedFaves] = useState<Array<Post>>(
    window.localStorage.getItem("savedFaves") //@ts-ignore
      ? JSON.parse(window.localStorage.getItem("savedFaves"))
      : []
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

  return (
    <Context.Provider value={{ savedFaves, addSavedFave, removeSavedFave }}>
      {children}
    </Context.Provider>
  );
};

export const useSavedFaves = (): UseSavedFaves => {
  return React.useContext(Context);
};

export default SavedFavesContext;
