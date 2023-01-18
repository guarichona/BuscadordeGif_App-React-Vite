import { useEffect, useState } from "react";
import { getGifs } from "../../helpers/getGifs";



//Un hook no es más que una función que retorna 
//A diferencia de un Fumcional Component en donde recibo (props), aquí recibo objetos y/o argumento posicionales 

export const useFetchGifs = (categoryq) => {

    //Toda esta información se encontraba en mi <<GifGrid>>
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {

        //el 'getGifs' es la intrucción que manda hacer mi petición HTTP
        const newImages = await getGifs(categoryq);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, [])


    return {

        //Para el caso de que el nombre de retorno, sea el mismo que el del objeto a enviar, puedo colocar solo el nombre una vez como por ej. 'isLoading'
        images: images,
        isLoading
    }




}
