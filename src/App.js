
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import CreateInvites from './pages/CreateInvites'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/createinvites' element={<CreateInvites/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
