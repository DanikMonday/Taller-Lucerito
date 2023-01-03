import React from 'react'
import cart from '../imagenes/cartbla.png'

function AgregarCarrito() {
  return (
    <button className='carrito-btn'>
        <img className='carrito-img' src={cart} alt='carrito'/>
    </button>
  )
}

export default AgregarCarrito