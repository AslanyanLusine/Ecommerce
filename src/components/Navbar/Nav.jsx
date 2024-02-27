import React, { useState } from 'react'
import "./Nav.css"
import { PiShoppingCartFill } from "react-icons/pi"
import logo from '../../Assets/logo.jpg'
import { Link } from 'react-router-dom'

const Nav = () => {
    const[menu, setMenu] = useState("shop")
  return (
    <div className="nav_bar">
        
        <div className="logo">
            <img src={logo} alt="logo"/>
            <p>LOVELY CLOTHES</p>
        </div>

        <ul className="nav_menu">
            <li onClick={()=> {setMenu("shop")}} ><Link to="/" style={{textDecoration:"none"}}>Shop</Link> {menu === "shop" ? <hr/> : <></>} </li>
            <li onClick={()=> {setMenu("men")}}><Link to="men" style={{textDecoration:"none"}}>Men</Link> {menu === "men" ? <hr/> : <></>}</li>
            <li onClick={()=> {setMenu("women")}}><Link to="women" style={{textDecoration:"none"}}>Women</Link> {menu === "women" ? <hr/> : <></>}</li>
            <li onClick={()=> {setMenu("kids")}}> <Link to="/kids" style={{textDecoration:"none"}}>Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
        </ul>

        <div className="cart">
            <Link to="/login" ><button className="login">Login</button></Link>
             <Link to="/cart">  <PiShoppingCartFill className="carts"/></Link>
            <p className="count"> 0 </p>
        </div>

    </div>
  )
}

export default Nav