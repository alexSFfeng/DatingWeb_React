import delay from './delay';
// Hard-coded initial login data

const agents = [
  {
    name: "Ada Qu",
    employeeId: "14194052",
    password: "Haohaoxuexi24"
  },
  {
    name: "Mo Ming",
    employeeId: "12345678",
    password: "87654321"
  }
]

const users = [
  {
    name: "Alex Feng",
    email: "alex134B@ucsd.edu",
    password: "shishangzuishuai",
    personality: "ENFJ",
    type: "Protagonist"
  }
]

class LoginApi {
  
  // get all the registered agents
  static getAllAgents() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], agents));
      }, delay);
    });
  }
  
  // get all the registered users
  static getAllUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }
  
  static saveUser(user){
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        users.push(user);
        resolve(user);
      }, delay);
    });
  }

}

export default LoginApi;