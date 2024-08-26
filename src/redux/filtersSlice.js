import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  filters: {
		name: ""
	}
}

const filtersName = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    filters: (state, action) => {
      state.filters.name = action.payload;
    }
  }
})

export const filtersSlice = filtersName.reducer;
export const {filters} = filtersName.actions;
