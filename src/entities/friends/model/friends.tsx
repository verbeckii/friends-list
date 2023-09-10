import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Friend {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  twitter: string;
}

const initialState: Friend[] = [
  {
    id: 1,
    firstName: 'Maxim',
    lastName: 'Burduja',
    email: 'masv@email.com',
    phone: '+373645687',
    twitter: '@mburja',
  },
  {
    id: 2,
    firstName: 'Ana',
    lastName: 'Novicov',
    email: 'ananovicov@email.com',
    phone: '+37364564',
    twitter: '@ana',
  },
  {
    id: 3,
    firstName: 'Dima',
    lastName: 'Hinev',
    email: 'dima@email.com',
    phone: '+3733124444',
    twitter: '@dima',
  },
];
export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    addFriend: (state, action: PayloadAction<Friend>) => {
      state.push(action.payload);
    },
    editFriend: (state, action: PayloadAction<Friend>) => {
      const { id, ...updatedFriend } = action.payload;
      const index = state.findIndex((friend) => friend.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedFriend };
      }
    },
    removeFriend: (state, action: PayloadAction<number>) => {
      return state.filter((friend) => friend.id !== action.payload);
    },
  },
});

export const selectFriendById = (state: Friend[], friendId: number) =>
  state.find((friend) => friend.id === friendId);
export const selectAvailableId = (state: Friend[]) => {
  const maxId = Math.max(...state.map((obj) => obj.id));
  const nextAvailableId = maxId + 1;
  return nextAvailableId;
};

export const { addFriend, editFriend, removeFriend } = friendsSlice.actions;

export default friendsSlice.reducer;
