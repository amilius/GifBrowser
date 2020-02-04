const favGIFsReducer = (
  state = {
    favGifs: []
  },
  action
) => {
  switch (action.type) {
    case 'ADD_FAV_GIF':
      return {
        ...state,
        favGifs: [].concat(
          action.payload,
          state.favGifs.filter(val => val.id !== action.payload.id)
        )
      };
    // To dodawało wielokrotnie...
    //   return {
    //     ...state,
    //     favGifs: [...state.favGifs, action.payload]
    //   };
    case 'DELETE_FAV_GIF':
      return {
        ...state,
        favGifs: state.favGifs.filter(gif => gif.id !== action.payload.id)
      };
    default:
      return state;
  }
};
export default favGIFsReducer;
