import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text:'Tomar el Curso de Intro a Rect.js', completed:false},
  {text: 'Llorar con la llorona', completed:false},
  {text: 'LALALALALA', completed:false}
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos); 
  
  const [searchValue, setSearchValue]= React.useState ('');

  const completedTodos = todos.filter(
    todo=> !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchdTodos = todos.filter(
    (todo)=> {
      return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    }
  );  
  // C O M P L E T A R  T O D O S  
  // Una funcion que recibe como argumento un texto cuando se ejecuta el evento Onclick
  const completeTodo = (text) => {
    // Una constante que llama al array existente todos y crea una copia denominada newTodos
    const newTodos = [...todos];
    // Una variable que se define como el metodo de encontrar el mismo texto que recibimos como argumento dentro del array ahora denominado newTodos
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text == text
      // si se encuentra dicho texto exactamanete igual a alguno que se encuentra en nuestro array este pasa a ser el text, o argumento que habiamos recibido.
    ) 
    newTodos[todoIndex].completed = 'true';
    // ya teniendo el index del objeto o todo a cambiar, que el index como anteriormente definimos es el texto, esta linea cambia su propiedad completed a true.

    setTodos(newTodos);
    //llamamos el actualizador del estado y enviamos el array modificado.
  }
  
  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchdTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={()=> completeTodo(todo.text)}
          />
        ))}
      </TodoList>

      < CreateTodoButton /> 

    </React.Fragment>
  );
}



export default App;
