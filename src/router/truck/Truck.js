import React from 'react'
import "./Truck.css"

function Truck() {
  return (
    <div className='truck'>
        <div className="main__part__truck">
          <div className="first__part__truck">
            <h1 className='truck__title'>Buyurtma holati</h1>
            <p className="desc__truck">Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</p>
            <p className="truck__number">Buyurtma raqami <span style={{color: "red"}}>*</span></p>
            <input required type="text" className="first__inp__truck" />
            <p className="truck__number">Buyurtma berilgandagi telfon raqami <span style={{color: "red"}}>*</span></p>
            <input type="text" className="first__inp__truck" placeholder='+__(__)___-__-__' />
            <button className="truck__btn"><p>Ko'rinish</p></button>
          </div>
          <div className="sec__part__truck"></div>
        </div>
    </div>
  )
}

export default Truck