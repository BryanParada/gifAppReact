import React, { useState } from 'react'
//     ^^ esta importacion es opcional, ya viene por defecto

export const GifApp = () => {

  const [categories, setCategories] = useState(['one punch', 'dbz'])

  console.log(categories)


  return (
   <>
          {/* titulo */}
          <h1> hola </h1>
          
          {/* input */}

      {/* listado de gif */}
    <ol>
     { categories.map( category => {
      return <li key={category}>{category}</li>
     }) }
      <li>ABC</li>
    </ol>

      {/* gif item */}

   </>
  )
}
