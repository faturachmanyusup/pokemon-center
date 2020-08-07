import React from 'react';
import Card from '../components/Card';

function Dashboard(props) {
  return (
    <div className="container" data-testid="dashboard-page">
      { props.pokemons &&
        <div className="row">
        {props.pokemons.results.map((pokemon, idx) => {
          pokemon.id = idx + 1;
          return <Card key= {idx} pokemon= {pokemon} />
        })}
      </div>}
      { props.loading && <h1 className="row justify-content-center mt-5">wait a second...</h1> }
      { props.error && <h1 className="row justify-content-center mt-5">{props.error}</h1> }
    </div>
  );
}

export default Dashboard;