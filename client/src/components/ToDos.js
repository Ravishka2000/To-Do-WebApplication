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


    const handleClick = (id, isCompleted) => {
        axios.patch(`http://localhost:8090/update-completed/${id}`, { completed: !isCompleted }).then(() => {
            setTodos(prevTodos => prevTodos.map(todo => {
                if (todo._id === id) {
                    return {
                        ...todo,
                        completed: !isCompleted
                    };
                }
                return todo;
            }))
        });
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8090/delete/${id}`)
            .then(() => {
                setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
            })
            .catch(res => { alert(res.data.message) }); 
    };

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
                        <tr key={todo._id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{new Date(todo.dueDate).toLocaleDateString('en-US')}</td>
                            <td>
                                <i
                                    className={`bi ${todo.completed ? 'bi-check-circle-fill' : 'bi-circle'} btn`}
                                    onClick={() => handleClick(todo._id, todo.completed)}
                                />
                            </td>
                            <td>
                                <button className='bi bi-pencil-square btn btn-success'></button>
                                <button
                                    className='bi bi-trash btn btn-danger ms-3'
                                    data-bs-toggle='modal'
                                    data-bs-target={`#deleteModal${todo._id}`}
                                />
                                <div className='modal fade' id={`deleteModal${todo._id}`} tabIndex='-1'>
                                    <div className='modal-dialog modal-dialog-centered'>
                                        <div className='modal-content'>
                                            <div className='modal-header'>
                                                <h5 className='modal-title'>Delete Task</h5>
                                                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                            </div>
                                            <div className='modal-body'>
                                                Are you sure you want to delete this task?
                                            </div>
                                            <div className='modal-footer'>
                                                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Cancel</button>
                                                <button type='button' className='btn btn-danger' data-bs-dismiss='modal' onClick={() => handleDelete(todo._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ToDos
