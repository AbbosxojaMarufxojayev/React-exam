import React from 'react'
import "./Payment.css"

function Payment() {
  return (
    <div className='payment'>
        <div className="main__part__payment">
          <h1 className='payment__title'>To'lov</h1>
          <p className="intro__payment">Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</p>
          <input type="text" className='inp__payment' placeholder='Namuna: A777 yoki B999 yoki M333' />
          <button className="payment__btn"><p>Tasdiqlash</p></button>
          <p className='smth'>B - buyurtma uchun</p>
          <p className='smth'>A - akkaunt uchun</p>
          <p className='smth'>M - rassrochkani so'ndirish uchun</p>
        </div>
    </div>
  )
}

export default Payment