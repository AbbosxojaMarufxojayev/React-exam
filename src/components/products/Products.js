import React, { useState, useEffect } from 'react'
import "./Products.css"
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_CART, REMOVE_CART } from "../../context/action/actionType"
import { ADD_TO_LIKE, REMOVE_LIKE } from "../../context/action/actionType"
import { Link, useParams } from "react-router-dom"

import { db } from "../../server"
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"

function Products({admin}) {
    const dispatch = useDispatch()
    const params = useParams()
    const likes = useSelector(s=>s.heart)
    const cart = useSelector(s=> s.cart)
    const [ data, setData ] = useState([])
    const [ refresh, setRefresh ] = useState(false)

    const productsColRef = collection( db, "products" )

    useEffect(()=>{
        const getProducts = async ()=>{
            const products = await getDocs(productsColRef)
            setData(products.docs.map((pro)=> ({ ...pro.data(), id: pro.id })))
        }
        getProducts()
    }, [refresh])

    const addHeart = (item) => {
        let index = likes.findIndex(i => i.id === item.id)
        if(index > -1){
            return 
        }

        dispatch({type: ADD_TO_LIKE, payload: item})
    }

    const addCart = (item)=>{
        let index = cart.findIndex(i => i.id === item.id)

        if( index < 0 ){
            return dispatch({type: ADD_TO_CART, payload: [...cart, {...item, qty: 1}]})
        }
        let newCart = cart.map((pro, inx)=> inx === index ? {...pro, qty: pro.qty + 1} : pro)
        dispatch( {type: ADD_TO_CART, payload: newCart} )
    }

    const deleteProduct = async (id) => {
        await deleteDoc(doc(db, "products", id))
        .then(res => {
          console.log(res)
          setRefresh(!refresh)
        })
        .catch(err => console.log(err))
      }

    const Products = [
        {
            img: "https://assets.asaxiy.uz/product/main_image/desktop//63e1f02d4a2cd.jpg.webp",
            name: "Fen deyson supersonic",
            price: 6_199_000,
            icon1: <FiShoppingCart/>,
            icon2: <AiOutlineHeart/>,
            icon3: <AiFillHeart/>
        },
        {
            img: "https://assets.asaxiy.uz/product/main_image/desktop//60c43f3d699e9.jpg.webp",
            name: "Korkmaz Granita A1266",
            price: 409_000
        },
        {
            img: "https://assets.asaxiy.uz/product/main_image/desktop//60c43557df2f1.jpg.webp",
            name: "Korkmaz Granita A1262",
            price: 519_000
        },
        {
            img: "https://assets.asaxiy.uz/product/main_image/desktop//629da8fb58a3a.jpg.webp",
            name: "Elektr tefal Korkmaz",
            price: 519_000
        },
        {
            img: "https://assets.asaxiy.uz/product/main_image/desktop//62fe32c12d775.png.webp",
            name: "Skin care series",
            price: 279_000
        },
    ]
    

  return (
    <div className='products'>
       {
        data?.map((i, inx) =>  <div key={inx} className="products__container">
        <div className="img__part__products">
            <img src={i.urls[0]} alt="" />
            <div className="cart__div">
                <FiShoppingCart/>
            </div>
            <AiOutlineHeart className='heart__icon' onClick={()=> addHeart(i)} />
        </div>
        <div className="desc__part__products">
            <p className="name">{i.title}</p>
            <p className="price"><del style={{color: "red"}}>{i.price}</del> so'm</p>
            <p className='del__price smth__del'>{i.price - 500} so'm</p>

            <button className="btn__buy"><p>Bir klikda olish</p></button>

        </div>
    </div>)
       }
    </div>
  )
}

export default Products