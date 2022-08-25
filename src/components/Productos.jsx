import React from 'react'

export default function Productos({producto, color}) {
  console.log(producto);
  
    return (
      <div style={{backgroundColor: color, marginTop: "5px"}}>
          <h1 style={{ color: "red" }}>{producto.name}</h1>
          <p>Precio: ${producto.price}</p>
          <button>Comprar</button>
      </div>        
  )
}
