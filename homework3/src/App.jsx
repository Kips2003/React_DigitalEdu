import Card from './Components/Card';
import './css/App.css';
import User from './Components/User'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {users} from "./metadata/metadata.js"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/mainPage" element={users.map((user)=>(
            <Card {...user}
           />
          ))} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
