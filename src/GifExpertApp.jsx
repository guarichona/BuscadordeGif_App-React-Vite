import { useState } from "react";
import { AddCategory, GifGrid } from "./components";




export const GifExpertApp = () => {
  const [categorias, setCategorias] = useState([]);

  const onAddCategory = (newCategory) => {

    if (categorias.includes(newCategory)) return;

    console.log(newCategory)
    // setCategorias([...categorias, "Valorant"]);
    setCategorias([newCategory, ...categorias]);
  }

  return (
    <>
      {/* Título  */}
      <h1>Esto es un GifExpert App</h1>

      {/* Input. Que será un componente aparte para mejor manipulación y prueba */}
      <AddCategory onNewCategory={NachoEvent => onAddCategory(NachoEvent)}
      // on1AddCategory={setCategorias}
      />

      <sub>Gracias al curso de React dirigido por Fernando Herrera; desde la plataforma Udemy y por la paciencia de mi novio Nazhir Gonzáles 🍕🏆</sub>

      {/* Listado de Gif */}

      {categorias.map((category) =>
      (
        <GifGrid key={category} categoryq={category} />
        // <div key={category}>
        //   <h3>Lista de Gif</h3>
        //   <li>{category}</li>
        // </div>
      )
      )}

    </>
  );
};
