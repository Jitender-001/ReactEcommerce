import React from 'react';
import { Routes,Route } from 'react-router';
import Home from './home';
import Shop from './shop';
import Cart from './cart';

function Rout({shop,Filter,addtocart,cart,setCart,isAuthenticated}){
    return(
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/cart' element={<Cart cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}/>}></Route>
                <Route path='shop' element={<Shop shop={shop} Filter={Filter} addtocart={addtocart}/>} ></Route>
            </Routes>
        </>
    );
}

export default Rout;