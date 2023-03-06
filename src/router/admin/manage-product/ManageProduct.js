import React from 'react'
import Products from '../../../components/products/Products'


function ManageProduct() {
  return (
    <div>
        <h2 className='product__name'>Manage your products</h2>
        <Products admin={true}/>
    </div>
  )
}

export default ManageProduct