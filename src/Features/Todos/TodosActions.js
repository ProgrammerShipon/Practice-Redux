import {
  ADDEDtODOS,
  ALLcOMPLETED,
  CLEARcOMPLETED,
  COLORcHANGED,
  REMOVEtODOS,
  TOGGLED,
} from "./TodosTypes";

export function AddedTodos(textField) {
  return {
    type: ADDEDtODOS,
    payload: textField,
  };
}

export function removeTodos(todoId) {
  return {
    type: REMOVEtODOS,
    payload: todoId,
  };
}

export function ColorChanged(todoId, color) {
  return {
    type: COLORcHANGED,
    payload: {
      todoId,
      color,
    },
  };
}

export function allCompleted() {
  return {
    type: ALLcOMPLETED,
  };
}

export function clearCompleted() {
  return {
    type: CLEARcOMPLETED,
  };
}

export function toggled(todoId) {
  return {
    type: TOGGLED,
    payload: todoId,
  };
}
