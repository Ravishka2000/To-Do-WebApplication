import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ToDos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8090/')
            .then(res => {
                setTodos(res.data.todos);
            })
            .catch(res => { alert(res.data.message) });
    }, [])

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <td>Title</td>
                    <td>Descriptioin</td>
                    <td>Due Date</td>
                    <td>Status</td>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.dueDate}</td>
                            {todo.completed ? <td>Completed</td> : <td>Not Completed</td>}
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ToDos
