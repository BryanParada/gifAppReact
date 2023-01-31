import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
//     ^^ esta importacion es opcional, ya viene por defecto

export const GifApp = () => {

  const [categories, setCategories] = useState(['one punch', 'dbz'])

  const onAddCategory = ( newCategory ) =>{
    // console.log(newCategory)
    // categories.push('MI TEXTO') //! <- NO!

    if ( categories.includes(newCategory)) return;

     setCategories([ newCategory, ...categories]);
    //categories.push(newCategory);
    //setCategories( cat => [ newCategory, ...cat] );

  }

  console.log(categories)


  return (
   <>
          {/* titulo */}
          <h1> GifApp </h1>
          
          {/* input */}
          <AddCategory 
          // setCategories={setCategories}
          onNewCategory= { valor => onAddCategory(valor)} //valor = event
          // currentCategories={categories}
          />


      {/* listado de gif */}
      {/* <button onClick={onAddCategory}>Add</button> */}
      
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
