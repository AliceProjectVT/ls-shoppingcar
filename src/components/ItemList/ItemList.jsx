
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <>
      
      <div className='contenedor-producto'>
      {productos.map((prod) => <Item producto={prod} key={prod.id}/>) }
      </div>

    </>
  )
}

export default ItemList