import React from "react";
import './cart.css';
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function Cart({cart,setCart,isAuthenticated}){

    //inc qty
    const incQty = (product) =>{
        const exist = cart.find((x)=>{
            return x.id === product.id;
        });
        setCart(cart.map((currEle)=>{
            return currEle.id === product.id ? {...exist, qty: exist.qty+1} :currEle;
        }))
    }

    //decrrease qty
    const decQty = (product) =>{
        const exist = cart.find((x)=>{
            return x.id === product.id;
        });
        setCart(cart.map((currEle)=>{
            return currEle.id === product.id ? {...exist, qty: exist.qty-1} :currEle;
        }))
    }

    // remove product
    const removeProduct = (product)=>{
        const exist = cart.find((x)=>{
            return x.id === product.id;
        })

        if(exist.qty>0){
            setCart(cart.filter((currEle)=>{
                return currEle.id != product.id;
            }))
        }
    }

    // handle checkout 

    const handleCheckout =()=>{
        isAuthenticated ? alert("Order placed") : alert("Please login/signup")
    }

    //total amount

    const total = cart.reduce((price,item)=> price + item.qty*item.price,0);

    return(
        <>
            <div className="cart">
                <h3>#cart</h3>
                { 
                    cart.length === 0 && 
                    <>
                        <div className="empty_cart">
                            <h2>Your shopping cart is empty</h2>
                            <Link to='/shop'><button>Shop Now</button></Link>
                        </div>
                    </>
                  }
                <div className="container">
                  {
                    cart.map((currEle)=>{
                        return(
                            <>
                                <div className="box">
                                    <div className="img-box">
                                        <img src={currEle.image} alt="images"></img>
                                    </div>
                                    <div className="details">
                                        <div className="info">
                                            <h4>{currEle.cat}</h4>
                                            <h3>{currEle.Name}</h3>
                                            <p>Price : ${currEle.price}</p>
                                            <p>Total : ${currEle.price*currEle.qty}</p>
                                        </div>
                                        
                                        <div className="quantity">
                                            <button onClick={()=> incQty(currEle)}>+</button>
                                            <input tye="number" value={currEle.qty}></input>
                                            <button onClick={()=> decQty(currEle)}>-</button>
                                        </div>
                                       <div className="icons">
                                        <li onClick={()=> removeProduct(currEle)}><MdDelete /></li>
                                       </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                  }
                </div>

                <div className="bottom">
                    {
                        cart.length > 0 && 
                        <>
                            <div className="total">
                                <h4>Total : ${total}</h4>
                            </div>
                            <button onClick={()=> handleCheckout()}>Checkout</button>
                        </>
                    }
                    
                </div>
            </div>
        </>
    )
}


export default Cart;