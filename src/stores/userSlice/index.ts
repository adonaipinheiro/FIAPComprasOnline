import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: 'Usuário',
  email: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{name: string; email: string}>,
    ) => {
      state.name = action.payload.name;
    },
  },
});

export const {setUser} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
