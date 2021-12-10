import * as Message from '../Constants/Message';
import * as types from '../Constants/ActionTypes';
var initialState = Message.MSG_WELCOME;

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default: return state;
  }
};

export default myReducer;