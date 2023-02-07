import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ToDos from './components/ToDos';

function App() {
  return (
    <React.Fragment>
      <Header>
        <Header/>
      </Header>
      <main>  
        <Routes>
          <Route path="/" element={<ToDos/>}/>
        </Routes>

      </main>

    </React.Fragment>
  );
}

export default App;
