import { useState } from "react"

//                            vvv lo que recibimos de las props
export const AddCategory = ( {onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    // const onInputChange = (event) =>{
    //     console.log(event.target.value)
    //     setInputValue(event.target.value)
    // }

    const onInputChange = ({target}) =>{
        console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if( inputValue.trim().lenth <= 1) return;
        console.log(inputValue)
        // setCategories( categories => [ inputValue, ...categories]);
        setInputValue('');
        onNewCategory( inputValue.trim() )
        
    }

  return (
   <form onSubmit={(event) => onSubmit(event)}>
     <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // onChange={ (event) => onInputChange(event)}
        onChange={ onInputChange}
    />
   </form>
  )
}
