"use strict";

const todoKeys = {
  id: `id`,
  text: `text`,
  is_completed: `is_completed`,
};

const todos = [];

const errTodoNofFound = (todoId) => {
  return `Todo with id ${todoId} not found`;
};

// Добавление задачи
const getNewTodoId = (todos) => {
  return (
    todos.reduce((MaxId, todo) => {
      return Math.max(MaxId, todo[todoKeys.id]);
    }, 0) + 1
  );
};

const createTodo = (todos, text) => {
  //   [...todos, {}];
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

// выполнение задачи
const completeTodoById = (todos, todoId) => {
  const todo = todos.find((todo) => todo[todoKeys.id] == todoId);
  if (!todo) {
    console.error(errTodoNofFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

// удаление задачи
const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);
  if (todoIndex == -1) {
    console.error(errTodoNofFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// const deleteTodoById = (todos, todoId) => {
//   return todos.filter(todo => todo[todoKeys.id] != todoId);
// };
