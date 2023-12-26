
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}> </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<p>Not Found</p>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
