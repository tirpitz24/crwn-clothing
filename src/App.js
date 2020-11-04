import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import './App.css';


function App() {
  return (
  
    <div >
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
      </switch>

    </div>

  );
}

export default App;
