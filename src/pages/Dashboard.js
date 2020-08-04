import React, { Component } from 'react';
import Card from '../components/Card';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    const target = 'https://pokeapi.co/api/v2';
    fetch(`${target}/pokemon?limit=200`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemons: data.results
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  showDetail(pokemonName) {
    this.props.showDetailParent(pokemonName);
  }

  addToFav(pokemon) {
    this.props.addToFav(pokemon);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.pokemons.map((pokemon, idx) => {
            return (
              <Card
                key= {idx}
                id= {idx + 1}
                pokemon= {pokemon}
                showDetail={(pokemonName) => this.showDetail(pokemonName)}
                addToFav={(pokemon) => this.addToFav(pokemon)}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;