import React, { useState, useEffect } from 'react'
import axios from 'axios';



const AddTodo = () => {
    return (
        <div className='container px-5 col-5 mt-5 p-4 shadow p-2 mb-3 bg-body-tertiary rounded'>
            <div className='mb-3'>
                <h1 className='text-center'>Add Task</h1>
            </div>
            <div className="mb-3">
                <label for="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" placeholder="Enter Task Title here"/>
            </div>
            <div className="mb-3">
                <label for="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" placeholder="Enter Task Description here"/>
            </div>
            <div className="mb-3">
                <label for="dueDate" className="form-label">Due Date</label>
                <input type="text" className="form-control" id="dueDate" placeholder="Enter Task Due Date here"/>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary text-end">Add Task</button>
            </div>
        </div>
    )
}

export default AddTodo;
