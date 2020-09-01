import React, { useContext } from 'react';
import { favHandler } from '../App';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getName } from '../helpers';
import { addToFavorites, removeFromFavorites } from '../store/actions/favoritesActions';

function Card(props) {
  const history = useHistory();
  const { pathname } = useLocation();
  const { addToFav, removeFromFav } = useContext(favHandler);
  const dispatch = useDispatch();

  function showDetail() {
    history.push({pathname: `/detail/${props.pokemon.name}`});
  }

  function handleAddToFav() {
    addToFav(props.pokemon);
    dispatch(addToFavorites(props.pokemon));
  }

  function handleRemoveFromFav() {
    removeFromFav(props.pokemon);
    dispatch(removeFromFavorites(props.pokemon));
  }

  const button = () => {
    if (pathname === '/' && !props.pokemon.favorited) {
      return (
        <button
          type="button"
          className="btn btn-sm add-fav mt-2"
          onClick={() => handleAddToFav()}
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
          onClick={() => handleRemoveFromFav()}
        >remove
        </button>
      )
    }
  }

  return (
    <div className="card pokemon-card mt-5 mb-3 col-2" data-testid="pokemons-card">
      <img
        className="card-img-top pt-3"
        onClick= {() => showDetail()}
        alt= {props.pokemon.name}
        src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemon.id}.svg`}
      />
      <div className="card-body">
        <h5 className="card-title">{getName(props.pokemon.name)}</h5>
        {button()}
      </div>
    </div>
  )
}

export default Card;