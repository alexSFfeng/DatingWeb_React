import initialState from './initialState';

export default function targetReducer(state = initialState, action){

    switch (action.type) {
        case 'CREATE_MONDAY':{
          console.log("this is target in reducer "+ action.target);
          let Tasks = state.Monday;
          Tasks.push(action.target);
          state.Monday = Tasks;
          return state;
        }


        case 'CREATE_TUESDAY': {
          console.log("this is target in reducer "+ action.target);
          let Tasks = state.Tuesday;
          Tasks.push(action.target);
          state.Tuesday = Tasks;
          return state;
        }


        case 'CREATE_WEDNESDAY': {
          console.log("this is target in reducer "+ action.target);
          let Tasks = state.Wednesday;
          Tasks.push(action.target);
          state.Wednesday = Tasks;
          return state;
        }

        case 'CREATE_THURSDAY': {
          console.log("this is target in reducer "+ action.target);
          let Tasks = state.Thursday;
          Tasks.push(action.target);
          state.Thursday = Tasks;
          return state;
        }

        case 'CREATE_FRIDAY': {
          console.log("this is target in reducer "+ action.target);
          let Tasks = state.Friday;
          Tasks.push(action.target);
          state.Friday = Tasks;
          return state;
        }

        case 'CREATE_WEEKEND': {
          console.log("this is target in reducer "+ action.target);
          let Tasks = state.Weekend;
          Tasks.push(action.target);
          state.Weekend = Tasks;
          return state;
        }
        
        case 'DELETE_MONDAY':{
            console.log("this is target in reducer "+ action.target);
            let Tasks = state.Monday;
            Tasks.splice(action.target,1);
            state.Monday = Tasks;
            return state;
          }
  
  
          case 'DELETE_TUESDAY': {
            console.log("this is target in reducer "+ action.target);
            let Tasks = state.Tuesday;
            Tasks.splice(action.target,1);
            state.Tuesday = Tasks;
            return state;
          }
  
  
          case 'DELETE_WEDNESDAY': {
            console.log("this is target in reducer "+ action.target);
            let Tasks = state.Wednesday;
            Tasks.splice(action.target,1);
            state.Wednesday = Tasks;
            return state;
          }
  
          case 'DELETE_THURSDAY': {
            console.log("this is target in reducer "+ action.target);
            let Tasks = state.Thursday;
            Tasks.splice(action.target,1);
            state.Thursday = Tasks;
            return state;
          }
  
          case 'DELETE_FRIDAY': {
            console.log("this is target in reducer "+ action.target);
            let Tasks = state.Friday;
            Tasks.splice(action.target,1);
            state.Friday = Tasks;
            return state;
          }
  
          case 'DELETE_WEEKEND': {
            console.log("this is target in reducer "+ action.target);
            let Tasks = state.Weekend;
            Tasks.splice(action.target,1);
            state.Weekend = Tasks;
            return state;
          }

        default:
          return state;
    }

}