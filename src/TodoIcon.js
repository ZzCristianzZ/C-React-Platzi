// Se importan las imagenes como ReactComponent para indicar que debe ser tratado como componente y que recibe el nombre como CheckSVG o DeleteSVG, por lo que ahora mas adelante podemos utilizarlo en el codigo.
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
// Se importa el archivo CSS que hicimos especificamente para los iconos y que por lo tanto se aplicaran al renderizar el span.
import './TodoIcon.css'

// Es un objeto que almacena los tipos de iconos como propiedades que contiene una funcion que devuelve un componente.
const iconTypes = {
    "check":(color)=> <CheckSVG className="Icon-svg" fill={color}></CheckSVG>,
    //La funcion que toma como argumento 'color', devuelve el componente con la clase o estilo aplicado 'Icon-svg', y utilizando la propiedad 'fill'(que se traduce en la propiedad de poder cambiar el color del contenido del archivo SVG.) lo devuelve con un color en especifico.
    "delete":(color)=> <DeleteSVG className="Icon-svg" fill={color}></DeleteSVG>
};

//Es una funcion que recibe como argumentos el tipo y el color de los iconos que vamos a renderizar.
function TodoIcon({ type, color, onClick}) {
    return (
        // La funcion retorna renderizando un span que se aplican las clases correspondientes al tipo de icono.
        <span   
            className={`Icon-container Icon-svg Icon-container-${type}`}
            onClick={onClick}
        >
         {iconTypes[type](color)}   
         {/* //Aqui renderizamos el icono segun el tipo y el color por lo que si aqui necesitamos renderizar el icono de tipo check o tipo delete se aplicaran sus clases correspondientes. */}
        </span>
    )
}

//La funcion de componente es una forma conveniente de renderizar iconos SVG, que a traves de sus propiedades type y color se puede mostrar y personalizar su color.

export {TodoIcon};