
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
