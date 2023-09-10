import { combineReducers } from '@reduxjs/toolkit';
import { friendsSlice } from '../../entities/friends/';

export const rootReducer = combineReducers({
  [friendsSlice.name]: friendsSlice.reducer,
});
