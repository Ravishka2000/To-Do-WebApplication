import Todo from "../modules/TodoModel.js";

const createTodo = async (req, res) => {

    const newTodo = new Todo(req.body);

    try {
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

export default {
    createTodo,
    readTodos,
    getTodo,
    updateTodo
};