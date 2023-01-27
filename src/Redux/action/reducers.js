const initialState = {
  data: null,
  username: ""
}


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERNAME":
      return { ...state, username: action.payload };
    case "LOGIN":
      return { ...state, data: action.payload }
    default:
      return state;
  }
};
