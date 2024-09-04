



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
import ProductsInfo from './page/productsInfo/productsInfo.jsx';
import Basket from './page/basket/basket.jsx';
import Checkout from './page/checkout_page/checkout.jsx';
import Collectionpage from './page/collection_page/collection.jsx';
import Contact from './components/contact/contact.jsx';
import Productspage from './page/filter_page/filterpage.jsx';
import Useraccount from './page/useaccount/useraccount.jsx';
import Userlayout from './layout/userlayout/userlayout.jsx';

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
          <Route path='/filterProducts' element={<Productspage />} />
          <Route path='/collection' element={<Collectionpage/>}/>
          <Route path='contact' element={<Contact />} />
          <Route path='/Filterproducts/info/:id' element={<ProductsInfo />} />
          <Route ath='/useraccount' element={<Userlayout/>}>
          <Route path='/useraccount' element={<Useraccount />} />

          </Route>
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
