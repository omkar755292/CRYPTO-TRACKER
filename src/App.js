import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CyptoContextProvider from './context/CyoptoContext';

function App() {

  return (
    <div classNam='App' >
      <Router >
        <CyptoContextProvider>
          <Routes>
            <Route path='/*' element={<Home />} />
          </Routes>
        </CyptoContextProvider>
      </Router>
    </div>
  );
}

export default App;
