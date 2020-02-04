import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getGifResult, setLoading } from '../actions/index';
import GIF from './GIF';
import Loading from './Loading';

const LoadedGIFS = () => {
  let searchParams = useSelector(state => state.search);
  let { textSearch, limit, loadedGifs, loading } = searchParams;
  let APIKEY = 'w1Z04k4Tun1BI3mO6k2j5Oka8cq0XZP7';
  let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=${limit}&q=${textSearch}`;
  const dispatch = useDispatch();

  const searchGifs = async text => {
    dispatch(setLoading());
    const res = await axios.get(text);
    dispatch(getGifResult(res.data));
  };
  // Ładuje gify przy zmianie url
  useEffect(() => {
    searchGifs(url);
    // eslint-disable-next-line
  }, [url]);

  // Różne opcje wyświetlania
  let textdisplay = () => {
    if (loading === true) {
      return <Loading />;
    } else if (loadedGifs.pagination.total_count === 0 && loading === false) {
      return <p>There’s no GIFs related with provided keywords</p>;
    } else if (textSearch === '' && loading === false) {
      return (
        <p>Nothing to display. Please start typing in search field above</p>
      );
    } else {
      return loadedGifs.data.map((gif, i) => (
        <GIF key={i} gif={gif} fav='false' />
      ));
    }
  };

  return <>{textdisplay()}</>;
};

export default LoadedGIFS;
