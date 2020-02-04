import React from 'react';
import { useSelector } from 'react-redux';
import GIF from './GIF';

function FavouriteGIFS() {
  let fav = useSelector(state => state.favourite);

  return (
    <>
      <div>Favourite GIFs</div>
      {fav.favGifs.length === 0 ? (
        <p>
          There's nothing here yet. Please search for GIFs and then click on
          your favorites ones
        </p>
      ) : (
        fav.favGifs.map((gif, i) => <GIF key={i} gif={gif} fav='true' />)
      )}
    </>
  );
}

export default FavouriteGIFS;
