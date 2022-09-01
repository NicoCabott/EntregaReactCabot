import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemList({producto}) {
    return (
        <ul>
            {producto.map(producto => {
                return <Item 
                    producto = {producto} />
            })}
        </ul>
  )
}
