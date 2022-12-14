import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/">
          <Route index element={<Login/>} />
          <Route path="login" element={<Login/>} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="/students">
            <Route index element={<List/>} />
            <Route path=":studentId" element={<Single/>} />
            <Route path="new" element={<New/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
