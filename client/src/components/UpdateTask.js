import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const UpdateTask = () => {

    const { id } = useParams();
    const [tTitle, setTitle] = useState("");
    const [tDescription, setDescription] = useState("");
    const [tDueDate, setDueDate] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8090/get/${id}`).then((res) => {
            setTitle(res.data.todo.title);
            setDescription(res.data.todo.description);
            setDueDate(res.data.todo.dueDate);
        })
        .catch((err)=>{
            console.error(err);
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8090/update/${id}`, {
            title: tTitle,
            description: tDescription,
            dueDate: tDueDate,
        })
            .then((res) => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className='container px-5 col-5 mt-5 p-4 shadow p-2 mb-3 bg-body-tertiary rounded'>
            <div className='mb-3'>
                <h1 className='text-center'>Update Task</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Enter Task Title here" value={tTitle} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" placeholder="Enter Task Description here" value={tDescription} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="dueDate" className="form-label">Due Date</label>
                    <input type="text" className="form-control" id="dueDate" placeholder="Enter Task Due Date here" value={tDueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="submit" className="btn btn-success text-end" value="Update Task" />
                </div>
            </form>
        </div>
    )
}

export default UpdateTask;
