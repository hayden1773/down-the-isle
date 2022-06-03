
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Header/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
