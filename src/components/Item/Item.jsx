

const Item = ({ nombre, precio, stock }) => {
    const stockDisponible = stock > 0;
    return (
        

        <div className='producto'>
            <h3 > {nombre} </h3>
            <img className="img-prod" src="#" alt={`${nombre}`} />
            <p> Precio: ${precio} </p>
            <p className='l-i'>
            {stockDisponible
          ? stock === 1
            ? 'Queda el último!'
            : stock <= 5
            ? `Quedan solo ${stock}`
            : `Disponible ${stock}`
          : 'Agotado'}</p>
            <button className={`btn btn-green ${stockDisponible ? '' : 'opacity-50 cursor-not-allowed'}`} disabled={!stockDisponible}> Agregar</button>            
            
            <button className="btn btn-black ">
                Detalles
            </button>
        </div>
    )
}

export default Item