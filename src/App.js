import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './layout/navbar/Navbar';

import StudentManagement from './pages/studentManagement/StudentManagement';
import StudentProfile from './pages/studentProfile/StudentProfile';

import './App.scss';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pageContainer">
          <Routes>  
            <Route path="/" element={<StudentManagement />} />
            <Route path="/student/:id" element={<StudentProfile />} />
          </Routes>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
