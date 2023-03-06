import React from 'react'
import "./SubHeader.css"
import { FiMenu } from "react-icons/fi"

function SubHeader() {
  return (
    <div className='container'>
        <div className="sub__header">
            <ul className="collection1">
                <li className="item1"><FiMenu/></li>
                <li className="item1">Barcha bo'limlar</li>
                <li className="item1">Yangiliklar</li>
                <li className="item1">Yangi kelganlar</li>
                <li className="item1">Chegirmalar</li>
                <li className="item1">Kitoblar</li>
                <li className="item1">Telfon va gadjetlar</li>
                <li className="item1">Televizorlar</li>
                <li className="item1">Sport buyumlari</li>
            </ul>
        </div>
    </div>
  )
}

export default SubHeader