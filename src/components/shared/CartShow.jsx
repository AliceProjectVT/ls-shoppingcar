import React from 'react'

const CartShow = () => {
  return (
<div className={`container-cart-products `}>
        
        <>
          <div className="row-product ">
           
              <div className="cart-product" >
                <div className="info-cart-product">
                  <span className="cantidad-producto-carrito">
                    0
                  </span>
                  <p className="titulo-producto-carrito">Lulos</p>
                  <span className="precio-producto-carrito">
                   $1000
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="icon-close"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
                       </div>

          <div className="cart-total ">
            <h3>Total: $200.000 </h3>
            <span className="total-pagar"></span>
          </div>
          <button className="vaciar-carrito btn btn-green ">Vaciar Carrito</button>
          <button  className='btn btn-green' > Ver Carrito</button>
        </>
       : (
        <p className="cart-empty">El carrito está vacío</p>
      )
    </div>  )
}

export default CartShow