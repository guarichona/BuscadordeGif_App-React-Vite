// import { useState } from "react"

import { useState } from 'react';



// const [ inputValue, setinputValue ] = useState('One Punch');

// const onInputChange = () => {
//   setinputValue('Hola Mundo')

// }

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setinputValue] = useState('')

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  }

  // Controla la entrada de letras en la cajita del input y me genera la lista

  const onListado = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setinputValue('');
  }

  // Retorna un formulario a mi pantalla 
  return (
    <form onSubmit={onListado}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>)
}

