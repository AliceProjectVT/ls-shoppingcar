import Item from "../Item/Item";

import React from 'react'

export const ItemList = ({productos}) => {
   

    return (


        <>            
            <section className="contenedor">
                <div className="contenedor-producto">


                {productos.map(prod => (
                        
                            <Item  key= {prod.id} {...prod} />
                        
                    ))
                };
                </div>

            </section>

        </>

    )
}

export default ItemList