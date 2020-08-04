import React from 'react';
import Card from '../components/Card';

function Dashboard(props) {
  function showDetail(pokemonName) {
    props.showDetailParent(pokemonName);
  }

  function addToFav(pokemon) {
    props.addToFav(pokemon);
  }

  return (
    <div className="container">
      { props.pokemons &&
        <div className="row">
        {props.pokemons.results.map((pokemon, idx) => {
          pokemon.id = idx + 1;
          return (
            <Card
              key= {idx}
              dashboard= {true}
              pokemon= {pokemon}
              showDetail={(pokemonName) => showDetail(pokemonName)}
              addToFav={(pokemon) => addToFav(pokemon)}
            />
          )
        })}
      </div>}
      { props.loading && <h1 className="row justify-content-center mt-5">wait a second...</h1> }
      { props.error && <h1 className="row justify-content-center mt-5">{props.error}</h1> }
    </div>
  );
}

export default Dashboard;