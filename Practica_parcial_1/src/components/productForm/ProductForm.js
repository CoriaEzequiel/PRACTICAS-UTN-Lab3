
// Crear tres componentes: ContainerProducts, ProductForm y Cart

// ContainerProducts simplemente contiene a los otros componentes y debe manejar la lógica de toda la aplicación.

// ProductForm return un formulario para agregar un nuevo producto a la lista. Contiene una label que muestra "Ingresar nuevo producto a la lista", un input de tipo texto para escribir el producto y un botón para agregarlo a la lista.

// Cart devuelve una lista de los productos envueltos en una etiqueta h3. Ejemplo:
//  <h3>Televisor<h3/>
// <h3>Computadora<h3/>
// <h3>Mesa<h3/>
// Además, se pide que el usuario pueda clickear en cualquier producto de la lista para eliminarlo de ella.

// Considerar:
// -no se pide estilizado
// -todo el ejercicio se logra sólo con useState
// Teoría:
// 1) explicar el segundo argumento (array) de useEffect, para qué sirve (su objetivo) y qué significan cada uno de sus valores

// 2) Explicar un caso de useContext

import React, { useState } from 'react'

let id = 0; //agrego contador de id

const ProductForm = ({setProductosHandler, productos}) => {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setProductosHandler([
            ...productos,
            {id: id++, name: name} //cada vez que agrega un producto, incrementa el id
        ])
        setName("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Agregar producto'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default ProductForm