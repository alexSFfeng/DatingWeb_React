import delay from './delay';

const messages = [];

class ChatApi {
  static saveMessage(message){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        messages.push(message);
        resolve(message);
      }, delay);
    });
  }
}

export default ChatApi;