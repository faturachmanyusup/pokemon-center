import React, { Component } from 'react';
import Card from '../components/Card';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  favorites() {
    
  }

  showDetail(pokemonName) {
    this.props.showDetailParent(pokemonName);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.favorites.map((pokemon, idx) => {
            return (
              <Card
                key= {idx}
                id= {idx + 1}
                pokemon= {pokemon}
                showDetail={(pokemonName) => this.showDetail(pokemonName)}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Dashboard;