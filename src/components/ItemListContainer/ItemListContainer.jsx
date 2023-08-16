import ItemList from "../ItemList/ItemList"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const categoria = useParams().categoriae;


  useEffect(() => {

    const productosRef = collection(db, "productos");
    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }

          })
        )
      })

  }, [categoria])
  return (
    <div>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer