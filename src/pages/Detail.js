import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getName } from '../helpers';

function Detail() {
  const { pokemonName } = useParams();
  const target = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const [pokemon, loading, error] = useFetch(target);

  return (
    <div className="container detail d-flex justify-content-center mt-5" data-testid="detail-page">
      { pokemon &&
        <div className="card">
          <img className="card-img-top pt-4" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
          <div className="card-body">
            <div className="d-flex justify-content-around pt-4">
              <h4>{getName(pokemon.name)}</h4>
              <h5>Type: {getName(pokemon.types[0].type.name)}</h5>
            </div>
            <div className="row pt-5">
              <span className="col-3"><strong>HP</strong> : {pokemon.stats[0].base_stat}</span>
              <span className="col-3"><strong>Attack</strong> : {pokemon.stats[1].base_stat}</span>
              <span className="col-3"><strong>Defense</strong> : {pokemon.stats[2].base_stat}</span>
              <span className="col-3"><strong>Speed</strong> : {pokemon.stats[5].base_stat}</span>
            </div>
          </div>
        </div>
      }
      { loading && <h1>wait a second...</h1> }
      { error && <h1>{error}</h1> }
    </div>
  )
}

export default Detail;