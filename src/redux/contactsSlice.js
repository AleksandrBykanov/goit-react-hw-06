const INITIAL_STATE = {
  contacts: {
		items: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
	},
}

export const contactsSlice = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "contacts/add": {
      return {
        ...state,
        contacts: {
          items: [action.payload, ...state.contacts.items]
        } 
      }
    }
    case "contacts/delete": {
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(profile => profile.id !== action.payload)
        } 
     }
    }
    default:
      return state;
  }
}


export const addContact = (payload) => {
  return {
    type: "contacts/add",
    payload
  }
}

export const deleteContact = (profileId) => {
  return {
    type: "contacts/delete",
    payload: profileId
  }
}