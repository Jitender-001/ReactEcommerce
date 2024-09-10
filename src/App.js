import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rout from "./components/rout";
import Footer from "./components/footer";
import HomeProducts from "./components/home_products";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const [shop,setShop] = useState(HomeProducts);

  const [search,setSearch] = useState('');

  //add to cart
  const [cart,setCart] = useState([]);

  const Filter = (x)=>{
    const cateFilter = HomeProducts.filter((product)=>{
      return product.cat === x;
    })
    setShop(cateFilter);
  }


  const searchProduct = ()=>{
    const searchFilter = HomeProducts.filter((x)=>{
      return x.cat === search
    })

    setShop(searchFilter)
  }

  //add to cart

  const addtocart = (product)=>{
    const exist = cart.find((x)=>{
      return x.id === product.id;
    });

    if(exist){
      alert('Item already added to cart');
    }
    else{
      alert('Added to cart');
      setCart([...cart, {...product,qty:1}]);
    }
    
    
  }

  console.log(cart);

  return (
    <>
      <BrowserRouter>
        <Navbar search={search} setSearch={setSearch} searchProduct={searchProduct} loginWithRedirect={loginWithRedirect} logout={logout} user={user} isAuthenticated={isAuthenticated}
        ></Navbar>

        <Rout shop={shop} Filter={Filter} addtocart={addtocart} cart={cart} setCart={setCart} isAuthenticated={isAuthenticated}></Rout>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;