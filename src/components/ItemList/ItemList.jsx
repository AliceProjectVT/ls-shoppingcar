import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { dataBase } from "../../service/config";
import Item from "../Item/Item";

import React from 'react'

export const ItemList = ({producto}) => {
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
            <span>
                {
                    productos.map(prod => (
                        <div>
                            <Item  key= {prod.id} {...prod} />
                        </div>
                    ))
                };
            </span>

        </>

    )
}

export default ItemList