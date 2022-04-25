const SEND_MESSAGE = 'SEND-MESSAGE';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';

const initialState = {
  dialogs: [],
  messages: []
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      };
    case SET_DIALOGS:
      return {...state, dialogs: action.dialogs};
    case SET_MESSAGES:
      return {...state, messages: action.messages};
    default:
      return state;
  }
};

// actions creators
export const actionSendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
