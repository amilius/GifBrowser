export const setTextSearch = textSearch => {
  return {
    type: 'SET_TEXTSEARCH',
    payload: textSearch
  };
};

export const setLimit = limit => {
  return {
    type: 'SET_LIMIT',
    payload: limit
  };
};

export const setLoading = () => {
  return {
    type: 'SET_LOADING'
  };
};

export const getGifResult = loadedGifs => {
  return {
    type: 'GET_GIF_RESULT',
    payload: loadedGifs
  };
};

export const addFavGif = gif => {
  return {
    type: 'ADD_FAV_GIF',
    payload: gif
  };
};
export const delFavGif = gif => {
  return {
    type: 'DELETE_FAV_GIF',
    payload: gif
  };
};
