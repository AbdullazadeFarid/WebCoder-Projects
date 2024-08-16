
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Not_found from './page/not_found/not_found';
import Login from './page/login/login';
import Resetpassword from './page/resetpassword/resetpassword';
import Layout from './layout/secondLayout/layout';
import Verificatinlayout from './layout/verificatinlayout/verificatinlayout';
import Verification from './page/verification/verification';
import Newpassword from './page/newpassword/newpassword';
import Register from './page/register/register';
import Home from './page/home/home';
import About from './page/about/about';
import Search_results from './components/search_results/search_results';

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='*' element={<Not_found/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>



        <Route path='/' element={<Verificatinlayout/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login/resetpassword' element={<Resetpassword/>}/>
          <Route path='/login/resetpassword/verification' element={<Verification/>}/>
          <Route path='/login/resetpassword/verification/newpassword' element={<Newpassword/>}/>
        </Route>
      </Routes>
    </>
  );
}
export default App
