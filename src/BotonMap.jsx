import React from 'react'
import { useState } from 'react'

const BotonMap = () => {
const [Nombre, setNombre] = useState('Camilo')

const CambiarNombre = () => {

setNombre('Marly')
}

  return (


    <div>
      {Nombre}
      <button onClick={CambiarNombre}>Cambiar Nombre</button>
    </div>
  )
}

export default BotonMap

