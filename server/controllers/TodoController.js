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



export default {
    createTodo,
    readTodos,
};