
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Login from './pages/Login';
import Invites from './pages/Invites';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/invite' element={<Invites/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
