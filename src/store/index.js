import { createStore } from 'redux';

const initializeData = {
  pokemons: [],
  favorites : [],
}

function pokemonsReducer(state = initializeData, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.concat(action.payload.pokemon)
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(e => e !== action.payload.pokemon)
      };
    default:
      return state;
  }
}

const store = createStore(pokemonsReducer);

export default store;