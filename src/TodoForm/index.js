 import React from "react";
 import { TodoContext } from '../TodoContext';
 import './TodoForm.css';

 function TodoForm () {
    const {
        addTodo,
        setOpenModal,


    }= React.useContext(TodoContext);

    const onSubmit = (event)=> {
        event.preventDefault();
        addTodo (newTodoValue);
        setOpenModal(false);
    };
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onCancel = ()=> {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);  
    }
    
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo Todo</label>
            <textarea
            placeholder="Cortar Cebolla para el Almuerzo"
            value={newTodoValue}
            onChange={onChange}

            ></textarea>

            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button--add" type="submit">Añadir</button>
            </div>
        </form> 
    );
 }

 export { TodoForm }; 