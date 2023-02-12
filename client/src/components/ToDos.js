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
                    <th>Title</th>
                    <th>Descriptioin</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.dueDate}</td>
                            {todo.completed ? <td><i className="bi bi-check-circle-fill h5"></i></td> : <td><i className="bi bi-circle h5"></i></td>}
                            <td>
                                <button className='bi bi-pencil-square btn btn-success'></button>
                                <button className='bi bi-trash btn btn-danger ms-3'></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ToDos
