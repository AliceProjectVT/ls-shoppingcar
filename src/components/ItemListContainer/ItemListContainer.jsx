import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../service/config";



const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(dataBase, "productos"), where("idCat", "==", idCategoria)) : collection(dataBase, "productos");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }

        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))


  }, [idCategoria])

  return (
    <>
      <ItemList productos={productos}

      />
    </>
  );
};

export default ItemListContainer;
