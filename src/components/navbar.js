import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import './navbar.css';
import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa";



function Navbar({ search, setSearch, searchProduct, loginWithRedirect, logout, user, isAuthenticated }) {

    // const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    return (
        <>
            <div className="header">
                <div className="top-header">
                    <div className="icon">
                        <MdLocalShipping />
                    </div>

                    <div className="info">
                        <p>Free shipping when shopping upto $1000</p>
                    </div>
                </div>

                <div className="mid-header">
                    <div className="logo">
                        <img src="images/logo.png" alt="logo-image" />
                    </div>

                    <div className="search-box">
                        <input type="text" value={search} placeholder="Search...." onChange={(e) => setSearch(e.target.value)} />
                        <button onChange={searchProduct}><IoSearch /></button>
                    </div>

                    {
                        isAuthenticated ?
                        //logout button
                            <div className="user">
                                <div className="icon">
                                    <FiLogOut />
                                </div>
                                <div className="btn">
                                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                                </div>
                            </div> :
                                //login button
                            <div className="user">
                                <div className="icon">
                                    <FiLogIn />
                                </div>
                                <div className="btn">
                                    <button onClick={() => loginWithRedirect()}>Login</button>
                                </div>
                            </div>

                    }

                </div>

                <div className="bottom-header">
                    <div className="user-profile">
                        {
                             isAuthenticated ? 
                                <>
                                    <div className="icon">
                                        <FaUser />
                                    </div>

                                    <h4>{user.name}</h4>
                                    {/* <p>{user.email}</p> */}
                                </> :
                                <>
                                    <div className="icon">
                                        <FaUser />
                                    </div>
                                    <div className="info">
                                        <p>Please Login</p>
                                    </div>
                                </>
                        }
                    </div>

                    <div className="nav">
                        <ul>
                            <li><Link to="/" className="link">Home</Link></li>
                            <li><Link to="/shop" className="link">Shop</Link></li>
                            <li><Link to="/cart" className="link">Cart</Link></li>
                            <li><Link to="/about" className="link">About</Link></li>
                            <li><Link to="/contact" className="link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;