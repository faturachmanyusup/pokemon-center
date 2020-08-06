export function addToFavorites(pokemon) {
  return {
    type: "ADD_TO_FAVORITES",
    payload: {
      pokemon
    }
  };
};

export function removeFromFavorites(pokemon) {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: {
      pokemon
    }
  };
};