import mongoose from "mongoose";

const Schema = mongoose.Schema;

const toDo = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    required: false,
    default: false
  }
});

const Todo = mongoose.model("ToDo", toDo);

export default Todo;