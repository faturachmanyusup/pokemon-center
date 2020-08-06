import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Detail, Favorites } from './pages';
import Navbar from './components/Navbar';
import useData from './hooks/useFetch';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [reactive, setReactive] = useState(0);
  const target = 'https://pokeapi.co/api/v2/pokemon?limit=200';
  const [pokemons, loading, error] = useData(target);

  function addToFav(pokemon) {
    const triggerReactive = reactive + 1;
    pokemons.results[pokemon.id - 1].favorited = true;
    setReactive(triggerReactive);
  }

  function removeFromFav(pokemon) {
    pokemons.results[pokemon.id - 1].favorited = false;
  }
  
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard
                pokemons={pokemons}
                loading={loading}
                error={error}
                addToFav={(pokemon) => addToFav(pokemon)}
              />
            </Route>
            <Route exact path="/favorites">
            <Favorites
              removeFromFav={(pokemon) => removeFromFav(pokemon)}
            />
            </Route>
            <Route exact path="/detail/:pokemonName" component={Detail} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
