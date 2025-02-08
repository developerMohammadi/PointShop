import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  filter: number;
  sort: number;
  star: number;
  detail: number;
}

const initialState: ProductState = {
  filter: 0,
  sort: 0,
  star: 0,
  detail: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    incrementFilter: (state) => {
      state.filter += 1;
    },
    incrementSort: (state) => {
      state.sort += 1;
    },
    incrementStar: (state) => {
      state.star += 1;
    },
    incrementDetail: (state) => {
      state.detail += 1;
    },
    loadStateFromLocalStorage: (state, action: PayloadAction<ProductState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  incrementFilter,
  incrementSort,
  incrementStar,
  incrementDetail,
  loadStateFromLocalStorage,
} = productSlice.actions;

export default productSlice.reducer;
