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
        <div className='container mt-5 p-4 shadow p-2 mb-3 bg-body-tertiary rounded'>
            <h1 className='text-center mb-5 text-primary-emphasis fw-bolder'>Your Task's</h1>
            <table className="table text-center table-hover">
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
                            {todo.completed ? <td><i class="bi bi-check-circle-fill"></i></td> : <td><i class="bi bi-circle"></i></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ToDos
