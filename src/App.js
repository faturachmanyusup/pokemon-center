import './App.css';
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';
import useData from './hooks/useData';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [page, setPage] = useState('dashboard');
  const [favorites, setFavorites] = useState([]);
  const target = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  const [pokemons, loading, error] = useData(target);

  function showDetailParent(pokemonName) {
    setPokemon(pokemonName);
    setPage('detail');
  }
  
  function redirect(page) {
    setPage(page);
  }

  function addToFav(pokemon) {
    const newFavorites = favorites.concat(pokemon);
    pokemons.results[pokemon.id - 1].favorited = true;
    setFavorites(newFavorites);
  }

  function removeFromFav(pokemon) {
    pokemons.results[pokemon.id - 1].favorited = false;
    const newFav = favorites.filter(e => e !== pokemon);
    setFavorites(newFav);
  }
  
  function thisPage() {
    if (page === 'dashboard') {
      return (
      <Dashboard
        pokemons={pokemons}
        loading={loading}
        error={error}
        showDetailParent= {(pokemonName) => showDetailParent(pokemonName)} 
        addToFav= {(pokemon) => addToFav(pokemon)}
      />)
    } else if (page === 'favorites') {
      return <Favorites
        showDetailParent= {(pokemonName) => showDetailParent(pokemonName)}
        removeFromFav= {(pokemon) => removeFromFav(pokemon)}
        favorites= {favorites}
      />
    } else if(page === 'detail') {
      return <Detail pokemonName={pokemon} />
    }
  }

  return (
    <div className="App">
      <Navbar redirect= {(page) => redirect(page)} />
      {thisPage()}
    </div>
  );
}

export default App;
