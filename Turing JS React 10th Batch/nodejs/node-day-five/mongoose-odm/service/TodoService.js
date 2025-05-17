const Todo = require("./../models/Todo");

async function getAllTodos() {
  return Todo.find();
}

async function getTodoById(todoId) {
  return Todo.findById(todoId);
}

async function saveTodo(todo) {
  let newTodo = new Todo(todo);
  return newTodo.save();
}

async function updateTodoById(todoId, todo) {
  let exitTodo = await getTodoById(todoId);
  if (!exitTodo) {
    throw new Error("Todo not found");
  } else {
    return Todo.findByIdAndUpdate(todoId, todo, { new: true });
  }
}

async function deleteTodoById(todoId) {
  let todo = await getTodoById(todoId);
  if (!todo) {
    throw new Error("Todo not found");
  } else {
    return Todo.findByIdAndDelete(todoId);
  }
}

module.exports = {
  getAllTodos,
  getTodoById,
  saveTodo,
  updateTodoById,
  deleteTodoById,
};
