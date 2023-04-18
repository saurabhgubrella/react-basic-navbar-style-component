import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import Page3 from './pages/Page3';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';


function App() {
  return (
    // <div>
     
      <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/about' element={<Page2/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profile' element={<Page3/>}/>
      </Routes>
      </BrowserRouter>
      
     
  

    // </div>
  );
}

export default App;
