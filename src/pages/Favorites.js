import React from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

function Favorites(props) {
  const { favorites } = useSelector(pokemon => pokemon);

  function removeFromFav(pokemon) {
    props.removeFromFav(pokemon);
  }

  return (
    <div className="container">
      <div className="row">
        {favorites.map((pokemon, idx) => {
          return (
            <Card
              key={idx}
              dashboard={false}
              id={pokemon.id}
              pokemon={pokemon}
              removeFromFav={(pokemon) => removeFromFav(pokemon)}
            />
          )
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