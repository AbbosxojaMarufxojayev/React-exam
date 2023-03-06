import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FiSearch } from "react-icons/fi"
import { BsFillCreditCardFill, BsTruck, BsGlobe, BsCart2, BsHeart } from "react-icons/bs"
import { AiOutlineUser } from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import { LOG_IN } from '../../context/action/actionType'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {FiX} from "react-icons/fi"
 

function Navbar() {
  
  return (
    <>
         <div className='nav__container'>
        <div className="container">
            <div className="navbar">
                <Link to={"/"}><img className='nav__logo' src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" /></Link>
                <div className="nav__search">
                    <input type="text" placeholder='Qidirish...' />
                    <button><FiSearch/></button>
                </div>
                <div className="nav__items">
                    <FiMenu className='bar__menu'/>
                    <Link to={"/payment"} className='nav__item'>
                        <BsFillCreditCardFill/>
                        <p>To'lov</p>
                    </Link>
                    <Link to={"/truck"} className='nav__item'>
                        <BsTruck/>
                        <p>Trek</p>
                    </Link>
                    <div className="nav__item special">
                        <BsGlobe/>
                        <select name="" id="">
                            <option value="">Russian</option>
                            <option value="">Uzbek</option>
                        </select>
                    </div>
                    <Link to={"/cart"} className='nav__item'>
                        <BsCart2/>
                        <p>Savatcha</p>
                    </Link>
                    <Link to={"/like"} className='nav__item'>
                        <BsHeart/>
                        <p>Sevimlilar</p>
                    </Link>
                    <Link to={"/admin"} className='nav__item'>
                        <AiOutlineUser/>
                        <p>Kabinet</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>

    
    

    </>
  )
}

export default Navbar