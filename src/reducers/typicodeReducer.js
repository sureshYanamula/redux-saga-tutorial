const initialState = { loading: true, error: "", userData: [] };

export const typicodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_PENDING":
      return { loading: true, error: "", userData: [] };
    case "USER_SUCCESS":
      return { loading: false, error: "", userData: action.payload };
    case "USER_FAILURE":
      return { loading: false, error: "something went wrong", userData: [] };
    default:
      return state;
  }
};
