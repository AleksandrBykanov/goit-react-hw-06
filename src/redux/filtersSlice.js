const INITIAL_STATE = {
  filters: {
		name: ""
	}
}

export const filtersSlice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "filter/name": {
      return {
        ...state,
        filters: {
          name: action.payload 
        } 
      }
    }

    default:
      return state;
  }
}

export const filtersName = (payload) => {
  return {
    type: "filter/name",
    payload
  }
}