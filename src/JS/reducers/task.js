import { ADD_TASK, CHECK_TASK, DELETE_TASK, EDIT_TASK } from "../constants/task";

const initialState = {
 tasks:[
  { id:Math.random(), description:"First task", isDone:false},
  { id:Math.random(), description:"Second task", isDone:false},
  { id:Math.random(), description:"Third task", isDone:false},
  { id:Math.random(), description:"Fourth task", isDone:false},
],
};

const taskReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_TASK:
            return{...state, tasks:[...state.tasks, action.payload] };
        case DELETE_TASK:
            return {...state, tasks:state.tasks.filter((el) => el.id != action.payload)};
         case EDIT_TASK:
            return {
                ...state, 
                tasks: state.tasks.map((el) =>el.id==action.payload.id
                ? {...el, description: action.payload.newTitle}
                :el
                ),
            };
         case CHECK_TASK:
            return {
                ...state, 
                tasks: state.tasks.map((el) =>el.id==action.payload
                ? {...el, isDone: !el.isDone}
                :el
                ),
             }
        default: 
            return state;
    }
};

export default taskReducer;