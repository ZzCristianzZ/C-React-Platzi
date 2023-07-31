import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

// LocalStorage, Comentamos los defaulttodos
// const defaultTodos = [
//   {text: 'Cortar Cebolla', completed: true},
//   {text:'Tomar el Curso de Intro a Rect.js', completed:false},
//   {text: 'Llorar con la llorona', completed:false},
//   {text: 'LALALALALA', completed:false}
// ];
 
// Al haber comentado el array dentro de esta funcion ya no lo recibiriamos sino tendriamos el argumento desde localStorage. Pero no lo vamos a llamar directamente desde ahi.
function App() {
  // Vamos a crear una variable que sea igual a conseguir el Item, a TODOS_V1. Con esto lo que conseguimos es lograr que la aplicacion revise si hay algo en el localStorage y si este tiene informacion de nuestros TODOS entonces ese sera nuestro estado inicial. Y esta la pasamos a la funcion que renderiza nuestros Todos 
  let parsedTodos = localStorage.getItem('TODOS_V1'); 

  const [todos, setTodos] = React.useState(parsedTodos); 
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

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text == text
    ) 
    newTodos[todoIndex].completed = 'true';

    setTodos(newTodos);

  };
  const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo)=>todo.text == text
  ) 
  newTodos.splice(todoIndex, 1);

  setTodos(newTodos);
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
          onDelete={()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      < CreateTodoButton /> 

    </React.Fragment>
  );
}



export default App;
