import './App.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='flex'>
      <Sidebar/>
      <div className='content'>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/products" exact element={<Products/>}/>
        <Route path="/users" exact element={<Users/>}/>
        
        </Routes>
        
        
      </div>
      </div>
      
      
    </Router>
  );
}

export default App;
