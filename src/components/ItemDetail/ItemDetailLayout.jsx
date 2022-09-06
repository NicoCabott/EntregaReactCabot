import React from 'react'

export default function ItemDetailLayout(arrayItems) {
  return (
      <div>{arrayItems.map((item) => (
        <p>{JSON.stringify(item)}</p>
      ))}</div>
  )
}



