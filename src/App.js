import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import HeaderNav from './Pages/Shared/HeaderNav/HeaderNav';
import Blogs from './Pages/Blogs/Blogs';
import Purchase from './Pages/Home/Tools/Purchase';

function App() {
  return (
    <div className="max-w-screen-xl mx-auto mx-10 my-2">
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
