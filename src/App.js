import './App.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import UsersInDB from './components/UsersInDB'
import ProductsInDB from './components/ProductsInDB';
import CategoriesInDB from './components/CategoriesInDB';
import UserDetail from './components/UserDetail';
import ProductDetail from './components/ProductDetail';
import NextPageProducts from './components/NextPageProducts'
import NextPageUsers from './components/NextPageUsers'
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
//import Products from './pages/Products';
//import Users from './pages/Users';
//import Categories from './pages/Categories';



function App() {
  return (
    <Router>
      <div className='flex'>
      <Sidebar/>
      <div className='content w-100'>
      <Navbar/>
        <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/products" exact element={<ProductsInDB/>}/>
        <Route path="/users" exact element={<UsersInDB/>}/>
        <Route path="/categories" exact element={<CategoriesInDB/>}/>
        <Route path="/UserDetail/:id" exact element={<UserDetail/>}/>
        <Route path="/ProductDetail/:id" exact element={<ProductDetail/>}/>
        <Route path="/NextPageProducts" exact element={<NextPageProducts/>}/>
        <Route path="/NextPageUsers" exact element={<NextPageUsers/>}/>
        </Routes>
      </div>
      </div>
      
      <Footer/>
    </Router>
  );
}

export default App;
