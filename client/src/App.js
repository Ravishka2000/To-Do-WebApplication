import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import ToDos from './components/ToDos';
import UpdateTask from './components/UpdateTask';

function App() {
    return (
        <React.Fragment>
            <Header>
                <Header />
            </Header>
            <main>
                <Routes>
                    <Route path="/" element={<ToDos />} />
                    <Route path="/add" element={<AddTodo />} />
                    <Route path="/update/:id" element={<UpdateTask />} exact/>
                </Routes>

            </main>

        </React.Fragment>
    );
}

export default App;
