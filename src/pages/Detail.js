import React, { Component } from 'react';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: null,
      pokemonName: ''
    }
  }

  componentWillMount() {
    const target = 'https://pokeapi.co/api/v2/pokemon';
    fetch(`${target}/${this.props.pokemonName}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pokemon: data
      });
    })
    .catch(err => console.log(err));
  }
  
  render() {
    const pokemon = this.state.pokemon;
    return (
      <div className="container detail d-flex justify-content-center mt-5">
        { this.state.pokemon
          ? <div className="card">
              <img className="card-img-top pt-4" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
              <div className="card-body">
                <div className="d-flex justify-content-around pt-4">
                  <h4>{pokemon.name}</h4>
                  <h5>Type: {pokemon.types[0].type.name}</h5>
                </div>
                <div className="row pt-5">
                  <span className="col-3"><strong>HP</strong> : {pokemon.stats[0].base_stat}</span>
                  <span className="col-3"><strong>Attack</strong> : {pokemon.stats[1].base_stat}</span>
                  <span className="col-3"><strong>Defense</strong> : {pokemon.stats[2].base_stat}</span>
                  <span className="col-3"><strong>Speed</strong> : {pokemon.stats[5].base_stat}</span>
                </div>
              </div>
            </div>
          : null
        }
      </div>
    )
  }
}

export default Detail;