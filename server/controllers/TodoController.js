import Todo from "../modules/TodoModel.js";

const createTodo = async (req, res) => {

    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(200).json({
            message: "ToDo Added successfully",
            todo: newTodo
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
};

const readTodos = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json({
            todos: todos,
            message: "Todos Found"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    };
};

const getTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.status(200).json({
            todo: todo,
            message: "Todo Found"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    };
};

const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndUpdate(id, req.body);
        res.status(200).json({
            todo: todo,
            message: "Todo Updated"
        });
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    };
};

const updateCompleted = async (req, res) => {

    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndUpdate(id, { 
            completed: req.body.completed
        });
        res.status(200).json({
            todo: todo,
            message: "Todo Status Updated"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
};

const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id);
        res.status(200).json({
            message: "Todo Deleted",
            todo: todo
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
};

export default {
    createTodo,
    readTodos,
    getTodo,
    updateTodo,
    updateCompleted,
    deleteTodo
};