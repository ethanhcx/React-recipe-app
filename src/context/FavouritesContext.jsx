import { createContext, useContext, useEffect, useState } from "react";

const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  // Saved recipes, loaded from localStorage on first load
  const [favourites, setFavourites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favourites")) ?? [];
    } catch {
      return [];
    }
  });

  // Save to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // True if this recipe is already saved
  const isFavourite = (id) => favourites.some((r) => r.id === id);

  // Remove the recipe if saved, add it if not
  const toggleFavourite = (recipe) => {
    setFavourites((prev) =>
      prev.some((r) => r.id === recipe.id)
        ? prev.filter((r) => r.id !== recipe.id)
        : [...prev, recipe]
    );
  };

  return (
    <FavouritesContext.Provider value={{ favourites, isFavourite, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
}

// Use in any component: const { favourites, isFavourite, toggleFavourite } = useFavourites();
export function useFavourites() {
  return useContext(FavouritesContext);
}