// import style from './home.module.css';
import './home.css';
import { Link } from 'react-router-dom';
import HomeProducts from './home_products';
import { useState, useEffect } from 'react';
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi";


function Home() {
    //Product Category

    const [newProduct, setNewProduct] = useState([]);
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const [topProduct, setTopProduct] = useState([]);

    // Trending Product
    const [trendingProduct,setTrendingProduct] = useState(HomeProducts);

    //filtering trending products

    const filterCategory = (x)=>{
        const filterProduct = HomeProducts.filter((currEle)=>{
            return currEle.type === x;
        })
        setTrendingProduct(filterProduct);
    }

    //displaying all the trending items
    const allTrendings = ()=>{
        setTrendingProduct(HomeProducts);
    }

    // Product Type 

    useEffect(()=>{
        produtCategory();
    });


    //new products
    const produtCategory = ()=>{
        const newCategory = HomeProducts.filter((x)=>{
            return x.type === 'new';
        })

        setNewProduct(newCategory);

        //Featured Products

        const featuredCategory = HomeProducts.filter((x)=>{
            return x.type === 'featured';
        })

        setFeaturedProduct(featuredCategory);

         //Top   Products
        const topCategory = HomeProducts.filter((x)=>{
            return x.type === 'top';
        })

        setTopProduct(topCategory);
    }

    return (
        <>
            <div className="home">
                <div className="top-banner">
                    <div className="background">
                        <img src="http://localhost:3000/images/bg-image1.jpg" alt="bg-image1" />
                    </div>

                    <div className="info">
                        <h3>Blue Gradiant</h3>
                        <h2>Apple Watch</h2>
                        <p>30% off at your first order</p>
                        <Link to='/shop' className="link">Shop Now</Link>
                    </div>
                </div>

                <div className="trending">
                    <div className="container1">
                        <div className="left-box">
                            <div className="header">
                                <div className="heading">
                                    <h2 onClick={()=>allTrendings()}>Trending Items</h2>
                                </div>
                                <div className="categories">
                                    <h3 onClick={()=> filterCategory('new')}>New</h3>
                                    <h3 onClick={()=> filterCategory('featured')}>Featured</h3>
                                    <h3 onClick={()=> filterCategory('top')}>Top Selling</h3>
                                </div>
                            </div>

                            <div className="products">
                                <div className="container1">
                                    {
                                        trendingProduct.map((currEle)=>{
                                            return(
                                                <>
                                                    <div className="box">
                                                        <div className="img-box">
                                                            <img src={currEle.image} alt="Product-image" />

                                                            <div className="icon">

                                                                <div className="icon-box">
                                                                    <FaEye />
                                                                </div>

                                                                <div className="icon-box">
                                                                    <FaHeart />
                                                                </div>

                                                            </div>

                                                        </div>

                                                        <div className="info">
                                                            <h3>{currEle.Name}</h3>
                                                            <p>${currEle.price}</p>
                                                            <button className='btn'>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                                <button className='more-btn'>Show More</button>
                            </div>
                        </div>
                        <div className="right-box">
                                    <div className="container">
                                        <div className="testimonial">
                                            <div className="head">
                                                <h3>
                                                    Our Testimonials
                                                </h3>
                                            </div>
                                            <div className="details">
                                                <div className="img-box">
                                                    <img src="images/T1.jpg" alt="Testimonial-image" />
                                                </div>

                                                <div className="info">
                                                    <h3>Madison Goodwill</h3>
                                                    <h4>Web Developer</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="newsletter">
                                            <div className="head">
                                                <h3>Newsletter</h3>
                                            </div>
                                            
                                            <div className="form">
                                                <p>Connect to with us</p>
                                                <input type="email" placeholder='abc@gmail.com' autoComplete='off' />
                                                <button>Subscribe</button>
                                                <div className="icon-box">
                                                    <div className="icon">
                                                        <FaFacebook />
                                                    </div>
                                                    <div className="icon">
                                                        <FaInstagram />
                                                    </div>
                                                    <div className="icon">
                                                        <FaXTwitter />
                                                    </div>
                                                    <div className="icon">
                                                        <FaSnapchat />
                                                    </div>
                                                    <div className='icon'>
                                                        <FaYoutube />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="banners">
                    <div className="container">
                        <div className="left-box">
                            <div className="box">
                                <img src="images/b1.jpg" alt="banner" />
                            </div>
                            <div className="box">
                                <img src="images/b2.jpg" alt="banner" />
                            </div>
                            <div className="box box-6">
                                <img src="images/b6.jpg" alt="banner" />
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="top">
                                <img src="images/b3.jpg" alt="werew" />
                                <img src="images/b4.jpg" alt="edf" />
                            </div>

                            <div className="bottom">
                                <img src="images/b5.jpg" alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-type">
                    <div className='container'>
                        <div className='box'>
                            <div className='header'>
                                <h2>New Product</h2>
                            </div>

                            {
                                newProduct.map((currEle)=>{
                                    return(
                                        <>
                                            <div className='product-box'>
                                                <div className='img-box'>
                                                    <img src={currEle.image} alt='newProduct' />
                                                </div>
                                                <div className='details'>
                                                    <h3>{currEle.Name}</h3>
                                                    <p>${currEle.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button><HiOutlineShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                        <div className='box'>
                            <div className='header'>
                                <h2>Featured Product</h2>
                            </div>

                            {
                                featuredProduct.map((currEle)=>{
                                    return(
                                        <>
                                            <div className='product-box'>
                                                <div className='img-box'>
                                                    <img src={currEle.image} alt='newProduct' />
                                                </div>
                                                <div className='details'>
                                                    <h3>{currEle.Name}</h3>
                                                    <p>${currEle.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button><HiOutlineShoppingCart /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>

                        <div className='box'>
                            <div className='header'>
                                <h2>Top Product</h2>
                            </div>

                            {
                                topProduct.map((currEle)=>{
                                    return(
                                        <>
                                            <div className='product-box'>
                                                <div className='img-box'>
                                                    <img src={currEle.image} alt='newProduct' />
                                                </div>
                                                <div className='details'>
                                                    <h3>{currEle.Name}</h3>
                                                    <p>${currEle.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><FaHeart /></button>
                                                        <button><HiOutlineShoppingCart /></button>
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
        </>
    );
}

export default Home;