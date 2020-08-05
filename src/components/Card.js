import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function Card(props) {
  const history = useHistory();
  const { pathname } = useLocation();

  function showDetail() {
    history.push({pathname: `/detail/${props.pokemon.name}`});
  }

  function addToFav() {
    props.addToFav(props.pokemon);
  }

  function removeFromFav() {
    props.removeFromFav(props.pokemon);
  }

  const button = () => {
    if (pathname === '/' && !props.pokemon.favorited) {
      return (
        <button
          type="button"
          className="btn btn-sm add-fav mt-2"
          onClick={() => addToFav()}
        >+ favorite
        </button>)
    } else if(pathname === '/' && props.pokemon.favorited) {
      return (
        <button
          type="button"
          className="btn btn-sm fav mt-2"
        >favorited
        </button>)
    } else {
      return (
        <button
          type="button"
          className="btn btn-sm remove mt-2"
          onClick={() => removeFromFav()}
        >remove
        </button>
      )
    }
  }

  return (
    <div className="card pokemon-card mt-5 mb-3 col-2">
      <img
        className="card-img-top pt-3"
        onClick= {() => showDetail()}
        alt= {props.pokemon.name}
        src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`}
      />
        <div className="card-body">
          <h5 className="card-title">{props.pokemon.name}</h5>
          {button()}
        </div>
    </div>
  )
}

export default Card;