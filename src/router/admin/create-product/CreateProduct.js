import React, { useState } from 'react'
import "./CreateProduct.css"
import { db } from "../../../server"
import { collection, addDoc } from "firebase/firestore"

function CreateProduct() {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [urls, setUrls] = useState("")
  const [desc, setDesc] = useState("")
  const [category, setCategory] = useState("phone")
  const [loading, setLoading] = useState(false)

  const productsColRef = collection(db, "products")

  const createPro = async (e) => {
    e.preventDefault()
    setLoading(true)
    let newPro = {
      title,
      price: +price,
      urls: [urls],
      desc,
      category
    }
    await addDoc(productsColRef, newPro)
    .then(res => {
      console.log(res)
      setTitle("")
      setPrice("")
      setUrls("")
      setDesc("")
      setCategory("Phone")
      setLoading(false)
      alert("New product has successfully been created !")
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='create__pro'>
        <h2 className='product__name'>Create product</h2>
        <form onSubmit={createPro} action="" className='create__form'>
          <input required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Title' />
          <input required value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder='Price' />
          <input required value={urls} onChange={e => setUrls(e.target.value)} type="text" placeholder='Urls' />
          <input required value={desc} onChange={e => setDesc(e.target.value)} type="text" placeholder='Description' />
          <select value={category} onChange={e=> setCategory(e.target.value)} name="" id="">
            <option value="phone">Telefon</option>
            <option value="tv">TV</option>
            <option value="laptop">Noutbuk</option>
            <option value="technique">Maishiy texnika</option>
            <option value="accessories">Aksessuarlar</option>
          </select>
          <button disabled={loading} className='btn__create__pro' type='submit'>{loading ? "Loading..." : "Create product"}</button>
        </form>
    </div>
  )
}

export default CreateProduct