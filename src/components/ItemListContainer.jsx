import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState([])
    const [error, setError] = useState("")  
       
    
    useEffect(() => {
        let promesaProducto = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    { id: 100, name: 'zapato nike', precio: 100 },
                    { id: 101, name: 'zapato adidas', precio: 100 },
                    { id: 102, name: 'camiseta de river', precio: 100 },
                    { id: 103, name: 'camiseta argentina', precio: 100 },
                    { id: 104, name: 'Jogging', precio: 100 },
                ]);
            }, 2000)
        })
        promesaProducto
            .then((res) => {
                setProducto(res)
            })
    })
   
  
    return (
    <div>
        <ItemList 
            producto = {producto}/>
    </div>
  )
}
