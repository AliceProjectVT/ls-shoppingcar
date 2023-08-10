import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore";
import { dataBase } from "../../service/config";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState(null);
    const { id } = useParams(); // Cambia esta línea

    useEffect(() => {

        const docRef = doc (dataBase, "productos", id);
        getDoc(docRef)
         .then((resp) => {
            setDetalles(
                {...resp.data(), id: resp.id}
            )

         })

    },[id])


return (

  <>
    {detalles && <ItemDetail  detalles = {detalles} />}
  </>
)
}

export default ItemDetailContainer