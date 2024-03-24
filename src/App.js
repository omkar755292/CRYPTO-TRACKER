import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Authentication from './Authentication';
import UserAuthContextProvider from './context/UserAuthContext';

function App() {
  return (
    <div>
      <Router >
        <UserAuthContextProvider>
          <Routes>
            <Route path='/*' element={<Authentication />} />
            <Route path='/home/*' element={<Home />} />
          </Routes>
        </UserAuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
