import './App.css';
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard, Detail, Favorites } from './pages';
import Navbar from './components/Navbar';
import useFatch from './hooks/useFetch';
import { Provider } from 'react-redux';
import store from './store';

export const favHandler = createContext();

function App() {
  const [reactive, setReactive] = useState(0);
  const target = 'https://pokeapi.co/api/v2/pokemon?limit=200';
  const [pokemons, loading, error] = useFatch(target);
  
  function addToFav(pokemon) {
    const triggerReactive = reactive + 1;
    pokemons.results[pokemon.id - 1].favorited = true;
    setReactive(triggerReactive);
  }
  
  function removeFromFav(pokemon) {
    pokemons.results[pokemon.id - 1].favorited = false;
  }
  
  return (
    <favHandler.Provider value={{
      addToFav: (pokemon) => addToFav(pokemon),
      removeFromFav: (pokemon) => removeFromFav(pokemon),
    }}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Dashboard
                  data-testid="dashboard-page"
                  pokemons={pokemons}
                  loading={loading}
                  error={error}
                />
              </Route>
              <Route exact path="/favorites" component={Favorites} />
              <Route exact path="/detail/:pokemonName" component={Detail} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </favHandler.Provider>
  );
}

export default App;
