import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './pages/admin/Dashboard.js';
import Header from './components/global/Header.js';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
