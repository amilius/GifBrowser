const searchReducer = (
  state = {
    textSearch: '',
    limit: 4,
    loading: false,
    loadedGifs: { data: [], pagination: { total_count: 0 } }
  },
  action
) => {
  switch (action.type) {
    case 'SET_TEXTSEARCH':
      return {
        ...state,
        textSearch: action.payload,
        loading: false
      };
    case 'SET_LIMIT':
      return {
        ...state,
        limit: action.payload,
        loading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };
    case 'GET_GIF_RESULT':
      return {
        ...state,
        loadedGifs: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
export default searchReducer;
