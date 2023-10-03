 import React from "react";
 import './TodoForm.css';

 function TodoForm () {
    return (
        <form onSubmit={(event)=> {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo Todo</label>
            <textarea
            placeholder="Cortar Cebolla para el Almuerzo"></textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button--cancel">Cancelar</button>
                <button className="TodoForm-button--add">Añadir</button>
            </div>
        </form>
    );
 }

 export { TodoForm };