import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Authentication from './Authentication';
import UserAuthContextProvider from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return (
    <div className='App' >
      <Router >
        <UserAuthContextProvider>
          <Routes>
            <Route path='/authentication/*' element={<Authentication />} />
            <Route path='/*' element={<ProtectedRoute> <Home /> </ProtectedRoute>} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
