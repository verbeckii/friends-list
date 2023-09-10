import { configureStore } from '@reduxjs/toolkit';

import { friendsSlice } from '../../entities/friends';

export const store = configureStore({
  reducer: {
    friends: friendsSlice.reducer,
  },
});
