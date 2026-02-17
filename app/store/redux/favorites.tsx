import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [] as string[],
  },
  reducers: {
    addFavorites: (state: any, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorites: (state: any, action: PayloadAction<{ id: string }>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const addFavorites = favoritesSlice.actions.addFavorites;
export const removeFavorites = favoritesSlice.actions.removeFavorites;
export default favoritesSlice.reducer;
