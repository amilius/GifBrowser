import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavGif, delFavGif } from '../actions/index';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import Loading from './Loading';

const GIF = props => {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();
  let addToFavourites = () => {
    dispatch(addFavGif(props.gif));
  };
  let delFromFavourites = () => {
    dispatch(delFavGif(props.gif));
  };

  return (
    <>
      <span
        className='box'
        onClick={props.fav === 'false' ? addToFavourites : null}
      >
        {loaded ? null : (
          <span className='box' min-width='180' min-height='180'>
            <Loading />
          </span>
        )}
        <img
          key={props.gif.id}
          src={props.gif.images.downsized.url}
          alt='HTML5 Icon'
          width='180'
          height='180'
          style={loaded ? {} : { display: 'none' }}
          onLoad={() => setLoaded(true)}
        />
        <span onClick={props.fav === 'true' ? delFromFavourites : null}>
          {props.fav === 'true' ? (
            <div className='circle'>
              <Icon
                iconName='ChromeClose'
                className='ms-IconExample topright'
              />
            </div>
          ) : null}
        </span>
      </span>
    </>
  );
};

export default GIF;
