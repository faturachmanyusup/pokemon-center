import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Detail, Favorites } from './pages';
import Navbar from './components/Navbar';
import useData from './hooks/useData';

function App() {
  const [favorites, setFavorites] = useState([]);
  const target = 'https://pokeapi.co/api/v2/pokemon?limit=200';
  const [pokemons, loading, error] = useData(target);

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
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Dashboard
              pokemons={pokemons}
              loading={loading}
              error={error}
              addToFav= {(pokemon) => addToFav(pokemon)}
            />
          </Route>
          <Route exact path="/favorites">
          <Favorites
            removeFromFav= {(pokemon) => removeFromFav(pokemon)}
            favorites= {favorites}
          />
          </Route>
          <Route exact path="/detail/:pokemonName" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
