import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal}) {
    return (
        <button className="CreateTodoButton"
        onClick={
            () => {
                // Se llama al actualizador del estado y no se envio un valor tal cual, le enviamos una funcion, que recibe un parametro que lo llamamos "state", devolviendo la negacion de ese estado, es decir si el estado era true, lo devolvemos como false, y viceversa.
                setOpenModal(state => !state);
            }
        }
        >+</button>
    );
}
export { CreateTodoButton }; 