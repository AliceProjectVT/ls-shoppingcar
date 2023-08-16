
import Item from '../Item/Item'

const ItemList = ({productos}) => {
  return (
    <>
      <h2>Prudoctus</h2>
      <div>
      {productos.map((prod) => <Item producto={prod} key={prod.id}/>) }
      </div>

    </>
  )
}

export default ItemList