import { useState } from 'react';
import './App.css';
import Homepage from './components/pages/Page';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Employees from './components/pages/employees/employees';
import Organization from './components/pages/organization/organization';

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout />
        }
      >
      <Route
        index
        element={<Homepage />} 
      />
      <Route
        path="employees"
        element={<Employees />} 
      />
      <Route
        path="organization"
        element={<Organization />} 
      />
      </Route>
    </Routes>
  )
}

export default App;