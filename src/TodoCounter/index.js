import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext/index';

// Antes estabamos esperando a que el x componente que nos llamara nos enviara estas propiedades 
// function TodoCounter({total, completed}){
function TodoCounter(){
    // Pero ya no mas, vamos a recibirlas desde el contexto global de nuestra aplicacion, para eso llamamos a una herramienta llamada React.useContext. Este funciona como primero, debemos enviarle cual es el contexto que deseamos enviar. No olvidemos importar el archivo
    const {
        completedTodos,
        totalTodos,

    } = React.useContext( TodoContext );
    // Y utilizando la variable podemos recibir como objero las variables que necesitamos.
    return(
        <h1 className='TodoCounter'>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
        </h1>
    );
}


export {TodoCounter};