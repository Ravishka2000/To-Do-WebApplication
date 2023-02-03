import Todo from "../modules/TodoModel";

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

export default {
    createTodo
};