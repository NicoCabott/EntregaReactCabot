import React, { useState, useEffect } from "react";
import Producto from "./Producto";

export default function Item({producto}) {
  return (
      <div>
      <h3>{producto.name}</h3>
      <p>Precio: {producto.precio}</p>
      <button>Comprar</button>
      </div>
      
  )
}
