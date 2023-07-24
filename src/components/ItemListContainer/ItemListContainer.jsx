import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../service/config";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(dataBase, "productos"));

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

  return (
    <>  
         <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer