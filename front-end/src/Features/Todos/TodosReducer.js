import {
  ADDEDtODOS,
  ALLcOMPLETED,
  CLEARcOMPLETED,
  COLORcHANGED,
  LOADtODOS,
  REMOVEtODOS,
  TOGGLED,
} from "./TodosTypes";

const initializeState = [];

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todosReducer = (state = initializeState, action) => {
  switch (action?.type) {
    case LOADtODOS:
      return [...action.payload];

    case ADDEDtODOS:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case REMOVEtODOS:
      return state.filter((item) => item.id !== action.payload);

    case ALLcOMPLETED:
      return state.map((item) => {
        return {
          ...item,
          completed: true,
        };
      });

    case TOGGLED:
      return state.map((item) => {
        if (item.id !== action.payload) return item;
        else
          return {
            ...item,
            completed: !item.completed,
          };
      });

    case COLORcHANGED:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        } else {
          return { ...todo, color: color };
        }
      });

    case CLEARcOMPLETED:
      return state.filter((item) => !item.completed);

    default:
      return state;
  }
};

export default todosReducer;
