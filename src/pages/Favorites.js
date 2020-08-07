import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

function Favorites() {
  const { favorites } = useSelector(pokemon => pokemon);

  return (
    <div className="container" data-testid="favorites-page">
      <div className="row">
        {favorites.map((pokemon, idx) => {
          return <Card key={idx} pokemon={pokemon} />
        })}
      </div>
      {favorites.length < 1 &&
        <div className="container d-flex justify-content-center mt-5">
          <h2>You don't have any favorite Pokemon yet</h2>
        </div>
      }
    </div>
  );
}

export default Favorites;