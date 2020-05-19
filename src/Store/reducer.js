/*
 * File: reducer.js
 * Project: moovee
 * File Created: Tuesday, 19th May 2020 10:41:49 pm
 * Author: Adithya Sreyaj
 * -----
 * Last Modified: Tuesday, 19th May 2020 11:48:06 pm
 * Modified By: Adithya Sreyaj<adi.sreyaj@gmail.com>
 * -----
 */

const initialState = {
  favorites: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.value],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites].filter((item) => item !== action.value),
      };
    default:
      return state;
  }
};

export default reducer;
