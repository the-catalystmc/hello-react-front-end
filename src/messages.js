const GET_MESSAGES_REQUEST = 'GET_MESSAGES_REQUEST';
const GET_MESSAGES_SUCCESS = 'GET_MESSAGES_SUCCESS';

export const getMessagesSuccess = (json) => ({
  type: GET_MESSAGES_SUCCESS,
  json,
});

export const getMessages = () => (dispatch) => {
  dispatch({ type: GET_MESSAGES_REQUEST });
  return fetch('https://hello-rails-back-end.herokuapp.com/v1/messages')
    .then((response) => response.json())
    .then((json) => dispatch(getMessagesSuccess(json)));
};

export const initialState = { message: '' };

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_SUCCESS:
      return { ...state, message: action.json[0].body };

    default:
      return state;
  }
};

export default messagesReducer;
