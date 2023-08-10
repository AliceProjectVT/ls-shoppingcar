import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../service/config";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const fetchProductos = async () => {
            const productosCollection = collection(dataBase, "productos");
            const productosSnapshot = await getDocs(productosCollection);
            const productosData = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProductos(productosData);
        };

        fetchProductos();
    }, [idCategoria]);

    return (
        <div>
            <h2>Productos</h2>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
