import React from 'react';
import {Routes, Route} from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<>Main</>} />
        <Route path="about" element={<>About</>} />
        <Route path="register" element={<>Register</>} />
        <Route path="login" element={<>Login</>} />
      </Route>
    </Routes>
  );
}
