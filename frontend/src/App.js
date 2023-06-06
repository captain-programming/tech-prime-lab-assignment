import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/login/Login';
import Dashboard from './component/dashboard/Dashboard';
import CreateProject from './component/create-project/CreateProject';
import ProjectList from './component/project-list/ProjectList';
import PrivateRoute from './component/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path='/create-project' element={<PrivateRoute><CreateProject /></PrivateRoute>} />
        <Route path='/project-list' element={<PrivateRoute><ProjectList /></PrivateRoute>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
