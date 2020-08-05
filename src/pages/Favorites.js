import React from 'react';
import Card from '../components/Card';

function Favorites(props) {
  function removeFromFav(pokemon) {
    props.removeFromFav(pokemon);
  }

  return (
    <div className="container">
      <div className="row">
        {props.favorites.map((pokemon, idx) => {
          return (
            <Card
              key= {idx}
              dashboard= {false}
              id= {pokemon.id}
              pokemon= {pokemon}
              removeFromFav= {(pokemon) => removeFromFav(pokemon)}
            />
          )
        })}
      </div>
      {props.favorites.length < 1 &&
        <div className="container d-flex justify-content-center mt-5">
          <h2>You don't have any favorite Pokemon yet</h2>
        </div>
      }
    </div>
  );
}

export default Favorites;