import React from "react";
//Importamos la funcion TodoIcon de su archivo, en ella se cargara la funcion donde recibimos el color y el tipo del icono para renderizar.
import {TodoIcon} from './TodoIcon.js';

//Una funcion que recibe como argumento una propiedad de valos booleano que indicaria si la tarea esta completada o no.
function CompleteIcon({completed, onComplete}) {

    return(
        <TodoIcon
            type="check"
            color={completed ? 'green': 'gray'}
            onClick={onComplete}
        />
    )
    //La funcion retorna un icono de validacion o de check que puede llegar a tener un color o no si es completada la tarea
}

export {CompleteIcon};