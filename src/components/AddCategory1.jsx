// import { useState } from "react"

import { useState } from 'react';



// const [ inputValue, setinputValue ] = useState('One Punch');

// const onInputChange = () => {
//   setinputValue('Hola Mundo')

// }

export const AddCategory = ({ on1AddCategory }) => {

  const [inputValue, setinputValue] = useState('')

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  }

  const onListado = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    on1AddCategory((nombresPelis) => [inputValue, ...nombresPelis])
    setinputValue('');
  }

  return (
    <form onSubmit={onListado}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>

  )
}

