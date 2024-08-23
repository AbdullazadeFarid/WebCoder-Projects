



import React, { useEffect } from 'react';
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
import { SearchProvider } from './context/context';
import Filterproducts from './page/filter_page/filterpage';
import ProductsInfo from './page/productsInfo/productsInfo.jsx';
import Basket from './page/basket/basket.jsx';
import Checkout from './page/checkout_page/checkout.jsx';

function App() {

  return (
    <SearchProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path='/basket' element={<Basket />} />
        <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={<Not_found />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/filterProducts' element={<Filterproducts />} />
          <Route path='/Filterproducts/info/:id' element={<ProductsInfo />} />
        </Route>

        <Route path='/' element={<Verificatinlayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login/resetpassword' element={<Resetpassword />} />
          <Route path='/login/resetpassword/verification' element={<Verification />} />
          <Route path='/login/resetpassword/verification/newpassword' element={<Newpassword />} />
        </Route>
      </Routes>
    </SearchProvider>
  );
}

export default App;
