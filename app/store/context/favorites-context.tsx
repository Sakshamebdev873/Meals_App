import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [] as any[],
  addFavorites: (id: any) => {},
  removeFavorites: (id: any) => {},
});

function FavoritesContextProvider({ children }: any) {
  const [favoritesMealsIds, setFavoritesMealIds] = useState([]);
  function addFavorite(id: any) {
    setFavoritesMealIds((currentFavsIds): any => [...currentFavsIds, id]);
  }
  function removeFavorites(id: any) {
    setFavoritesMealIds((currentFavIds): any =>
      currentFavIds.filter((mealId) => mealId !== id),
    );
  }
  const contextValue = {
    ids: favoritesMealsIds,
    addFavorites: addFavorite,
    removeFavorites: removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
