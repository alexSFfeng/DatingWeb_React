import expect from 'expect';
import chatReducer from './chatReducer';
import * as actions from '../actions/chatAction';

describe('Chat Reducer', () => {
  it('should load messages when passed SAVE_MESSAGE_SUCCESS', () => {
    // arrange
    const initialMessages = [
      {message:"Hello"},
      {message:"It's me~"}
    ];

    const newMessage = {
      message: "Bye bye"
    }

    const action = actions.saveMessageSuccess(newMessage);

    const newHistory = chatReducer(initialMessages,action);

    expect(newHistory.length).toEqual(3);
    expect(newHistory[0].message).toEqual('Hello');
    expect(newHistory[1].message).toEqual("It's me~");
    expect(newHistory[2].message).toEqual("Bye bye");

  });
});