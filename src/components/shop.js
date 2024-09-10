import React from "react";
import './shop.css'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa"; 
import { IoMdStar } from "react-icons/io";

function Shop({shop,Filter,addtocart}){

    return(
        <>
            <div className="shop">
                <h2># Shop</h2>
                <p>Home . shop</p>
                <div className="container">
                    <div className="left-box">
                        <div className="category">
                            <div className="header">
                                <h3>All Categories</h3>
                            </div>
                            <div className="box">
                                <ul>
                                    <li onClick={()=> Filter("jeans")}># jeans</li>
                                    <li onClick={()=> Filter("t-shirt")}># t-shirt</li>
                                    <li onClick={()=> Filter("shoes")}># shoes</li>
                                    <li onClick={()=> Filter("shirt")}># shirt</li>
                                    <li onClick={()=> Filter("top")}># top</li>
                                    <li onClick={()=> Filter("blazer")}># blazer</li>
                                    <li onClick={()=> Filter("watch")}># watch</li>
                                </ul>
                            </div>
                        </div>

                        <div className="banner">
                            <div className="img-box">
                                <img src="images/product1.jpg" alt="image" />
                            </div>
                        </div>

                    </div>

                    <div className="right-box">
                        <div className="banner">
                            <div className="img-box">
                                <img src="/images/product2.jpg" alt="image"></img>
                            </div>
                        </div>
                        <div className="product-box">
                        <h2>Shop Products</h2>
                            <div className="product-container">
                                
                                {
                                    shop.map((currEle)=>{
                                        return(
                                            <>
                                                <div className="box">
                                                    <div className="img-box">
                                                        <img src={currEle.image} alt="images"></img>
                                                        <div className="icons">
                                                            <li><FaHeart /></li>
                                                            <li><FaEye /></li>
                                                        </div>
                                                    </div>
                                                    <div className="details">
                                                        <h3>{currEle.Name}</h3>
                                                        <div style={{display:"flex", gap:"20px"}}>
                                                        <p>${currEle.price}</p>
                                                        <p style={{color:"#232323"}}>{currEle.rating}<IoMdStar /></p>
                                                        </div>
                                                        <p>{currEle.desc}</p>
                                                        <div className="cartBtn">
                                                        <button onClick={()=> addtocart (currEle)}>Add to Cart</button>
                                                        <button onClick={()=> addtocart (currEle)}>Buy Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

}

export default Shop;