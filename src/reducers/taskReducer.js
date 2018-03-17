export default function targetReducer(state = [], action){
    switch (action.type) {
        case 'CREATE_MONDAY':
          console.log("this is target in reducer "+ action.target);
          return [...state,action.target];


        default:
          return state;
    }

}