import React, { Component } from 'react';

class Card extends Component {
  showDetail() {
    this.props.showDetail(this.props.pokemon.name);
  }

  addToFav() {
    this.props.addToFav(this.props.pokemon);
  }

  render() {
    return (
      <div className="card pokemon-card mt-5 col-2">
        <img
          onClick={() => this.showDetail()}
          className="card-img-top pt-3"
          alt={this.props.pokemon.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.props.id}.svg`}
        />
          <div className="card-body">
            <h5 className="card-title">{this.props.pokemon.name}</h5>
            <button type="button" className="btn btn-sm mt-2" onClick={() => this.addToFav}>+ favorite</button>
          </div>
      </div>
    )
  }
}

export default Card;