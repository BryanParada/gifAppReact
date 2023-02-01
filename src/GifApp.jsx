import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
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
          <h1> GifApp </h1>
           
          <AddCategory  
          onNewCategory= { valor => onAddCategory(valor)} //valor = event 
          />

 
     { 
        categories.map( (category) => {
     
          <GifGrid 
            key={category}
            category={category}
          />


     })
      }
      
     

   </>
  )
}
