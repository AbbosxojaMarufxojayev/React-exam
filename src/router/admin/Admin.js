import React from 'react'
import "./Admin.css"
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import { Routes, Route, NavLink, Link } from "react-router-dom"
import { AiOutlineHome, AiFillHeart } from "react-icons/ai"
import { IoMdCreate } from "react-icons/io"
import { MdOutlineManageSearch, MdOutlineAdminPanelSettings } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LOG_OUT } from "../../context/action/actionType"



function Admin() {
  const dispatch = useDispatch()

  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <h1 className='sidebar__name'>Admin Panel</h1>
        <ul className="collection__sidebar">
          <li className="item__sidebar"><NavLink to={"/"}><AiOutlineHome/> Home</NavLink></li>
          <li className="item__sidebar"><NavLink to={"create-product"}><IoMdCreate/> Create product</NavLink></li>
          <li className="item__sidebar"><NavLink to={"manage-product"}><MdOutlineManageSearch/> Manage product</NavLink></li>
        </ul>
        <button className='log__out'><Link to={"/"}>Back to home</Link></button>
      </div>
      <div className="admin__content">
        <Routes>
          <Route path='create-product' element={<CreateProduct/>}/>
          <Route path='manage-product' element={<ManageProduct/>}/>
        </Routes>
      </div> 
    </div>
  )
}

export default Admin