import React, { useState, useEffect } from "react";
import ItemDetailLayout from "./ItemDetailLayout";

export default function ItemDetailContainer() {
    const [arrayItems, setArrayItems] = useState([])

    useEffect(() => {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((json) => {
                    setArrayItems(json.results)
                })
                .catch((e) => console.log(e))
                .finally(() => console.log("finally"))

    }, [])
  
    return (
    <div>
        <ItemDetailLayout arrayItems={arrayItems} />
    </div>
  )
}

