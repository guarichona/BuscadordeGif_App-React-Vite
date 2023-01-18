
import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";


export const GifGrid = ({ categoryq }) => {

	const { images, isLoading } = useFetchGifs(categoryq)


	//Si quieres que te aparezca con el nombre del objeto en consola, lo colocas entre {}.


	//Sustituyo todo esto por un 'Custom Hook' el cual será 'useFetchGifs' y copio el código en el 'Custom Hook'

	// const [images, setImages] = useState([]);

	// const getImages = async () => {
	// 	const newImages = await getGifs(categoryq);
	// 	setImages(newImages);
	// }

	// useEffect(() => {
	// 	getImages();
	// }, [])

	return (
		<>
			<h3> {categoryq} 🍎</h3>
			{
				isLoading && (<h2>Cargando...</h2>)
			}

			<div className="card-grid">
				{
					images.map((i) => (
						<GifItem key={i.id} {...i} />
					))}
			</div>
		</>)
}

 // todo 'método' itera con la intención de hacer una acción en específico. Ej. buscar, devolver un array, filtrar
 // "i" te devolverá un objeto de la iteración de búsqueda de cada componente, titleMarly y urlMarly son las propiedades(props) que yo estoy definiendo. Expando las propiedades con { ...i}
 // 'i' es una iteración a cada componente del array 'images', map es un método de los array,
