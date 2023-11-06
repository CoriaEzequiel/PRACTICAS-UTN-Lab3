import React from 'react'

const Cart = ({productos, setProductosHandler}) => {

    const productosMapeado = productos.map(producto => 
        <div key={producto.id}>
            <h3>{producto.name}</h3>
            <button onClick={() => setProductosHandler(productos.filter(p => p.id !== producto.id))}>Eliminar</button>
        </div>
    )

    return (
        <div>
            {productosMapeado}
        </div>
    )
}

export default Cart
