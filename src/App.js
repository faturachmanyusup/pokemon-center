import React, { Component } from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: '',
      page: 'dashboard',
      newFav: null
    };
  }

  showDetailParent(pokemonName) {
    this.setState({
      pokemon: pokemonName,
      page: 'detail'
    });
  }
  
  redirect() {
    this.setState({
      page: 'dashboard'
    });
  }

  addToFav(pokemon) {
    this.setState({
      newFav: pokemon
    })
  }

  render() {
    const thisPage = () => {
      if (this.state.page === 'dashboard') {
        return  <Dashboard
                  showDetailParent={(pokemonName) => this.showDetailParent(pokemonName)} 
                  addToFav={(pokemon) => this.addToFav(pokemon)}
                />
      } else if (this.state.page === 'favorites') {
        return <Favorites showDetailParent={(pokemonName) => this.showDetailParent(pokemonName)} />
      } else if(this.state.page === 'detail') {
        return <Detail pokemonName={this.state.pokemon} />
      }
    }

    return (
      <div className="App">
        <Navbar redirect={(page) => this.redirect(page)} />
        {thisPage()}
      </div>
    );
  }
}

export default App;
