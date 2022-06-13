import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../../pages/Main';
import Register from '../../pages/Register';
import Login from '../../pages/Login';

export default function Router() {
  return (
    <Routes>
      <Route path="*" element={<>NotFound</>} />
      <Route path="/">
        <Route index element={<Main/>} />
        <Route path="about" element={<>About</>} />
        <Route path="register" element={<Register/>} />
        <Route path="login" element={<Login/>} />
      </Route>
    </Routes>
  );
}
