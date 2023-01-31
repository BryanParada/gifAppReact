import React, { useState } from 'react'
//     ^^ esta importacion es opcional, ya viene por defecto

export const GifApp = () => {

  const [categories, setCategories] = useState(['one punch', 'dbz'])

  const onAddCategory = () =>{

    // categories.push('MI TEXTO') //! <- NO!
    // setCategories([  ...categories, 'VALORANT']);
    setCategories( cat => [ ...cat, 'Valorant'] );

  }

  console.log(categories)


  return (
   <>
          {/* titulo */}
          <h1> hola </h1>
          
          {/* input */}

      {/* listado de gif */}
      <button onClick={onAddCategory}>Add</button>
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
