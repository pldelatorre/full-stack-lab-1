import './App.css';
import Homepage from './components/pages/Page';
import { Routes, Route } from 'react-router';
import Layout from './components/Layout/Layout';
import Employees from './components/pages/employees/employees';
import Organization from './components/pages/organization/organization';
import CreateEmployeeForm from './components/pages/employees/createEmployeeForm';
import CreateRoleForm from './components/pages/organization/createRoleForm';

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
        path="employees/create"
        element={<CreateEmployeeForm />} 
      />
      <Route
        path="organization"
        element={<Organization />} 
      />
      <Route
        path="roles/create"
        element={<CreateRoleForm />}
      />
      </Route>
    </Routes>
  )
}

export default App;