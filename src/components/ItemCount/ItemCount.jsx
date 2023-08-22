import React from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <>

        <div className="item-count">
            <button className='bg-gray-200 border border-gray-300 px-3 py-2 rounded-full hover:bg-gray-300 transition' onClick={handleRestar}>-</button>
            <span className='text-lg mx-2'>{cantidad}</span>
            <button className='bg-gray-200 border border-gray-300 px-3 py-2 rounded-full hover:bg-gray-300 transition' onClick={handleSumar}>+</button>
        </div>
        <button className= " mt-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition" onClick={handleAgregar}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount