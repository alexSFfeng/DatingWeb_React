import ChatApi from '../api/mockChatApi';
import * as types from "./actionTypes";

export function saveMessageSuccess(message){
  return { type : types.SAVE_MESSAGE_SUCCESS, message:message};
}

export function saveMessage(message){
  return function(dispatch) {
    return ChatApi.saveMessage(message).then(message =>{
      dispatch(saveMessageSuccess(message));
    });
  };
}