import React from 'react'
import cart from '../imagenes/cartbla.png'

function AgregarCarrito() {
  return (
    <div >
        <img className='carrito-img' src={cart} alt='carrito'/>
    </div>
  )
}

export default AgregarCarrito