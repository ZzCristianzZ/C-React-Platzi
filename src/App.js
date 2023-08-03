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
// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.getItem('TODOS_v1');

// const stringifiedTodos = JSON.stringify(defaultTodos)
// JSON.parse(stringifiedTodos)

// localStorage.setItem ('TODOS_V1', stringifiedTodos)
// const localStorageTodos = localStorage.getItem('TODOS_V1')

// let parsedItems = JSON.parse(localStorageTodos)
// parsedItems

// Al haber comentado el array dentro de esta funcion ya no lo recibiriamos sino tendriamos el argumento desde localStorage. Pero no lo vamos a llamar directamente desde ahi.
function App() {
  // Vamos a crear una variable que sea igual a conseguir el Item, a TODOS_V1. Con esto lo que conseguimos es lograr que la aplicacion revise si hay algo en el localStorage y si este tiene informacion de nuestros TODOS entonces ese sera nuestro estado inicial. Y esta la pasamos a la funcion que renderiza nuestros Todos 
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  // lo que realizaremos para solucionar la renderizacion de nuestros objetos es crear una nueva variable que llame a nuestro codigo en el local Stroge, y en nuestro parsedTodos lo que realizaremos es llamar a la funcion JSON.parse cpn el argumento de los localStorageTodos/
 
  // La funcion JSON.parse es una funcion que sirve para analizar o convertir una cadena JSON, en un objeto JavaScript.
   let parsedTodos;
    // Para que no se rompa la aplicacion cuando no tenga nada en el local storage, vamos a crear un condicional
    // Si no hay nada en el localStorage, entonces nuestras varibles parsedTodos sea igual a un array vacio.
    // Tambien deseo que de una vez el localStorage me guarde un string vacio con el nombre TODOS_V1, y un array vacio que vamos a tranformar en codigo JSON.

    if (!localStorageTodos){
      //En dado caso donde no haya datos, array o algun objeto con el nombre localStorgeTodos, que seria nuestro array base, entonces creamos el array con el nombre TODOS_V1, y transformamos el mismo en codigo JSON.
      localStorage.setItem('TODOS_V1', JSON.stringify([]));
      // Definimos como variable parsedTodos el array vacio.Que seria el objeto que va a renderizar nuestra estado App.
      parsedTodos([]);
    }else{
      // parseTodos seria lo que sea en el local Storage transformandolo de cadena JSON a codigo JavaScript
      parsedTodos = JSON.parse(localStorageTodos);
    }
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
  //Vamos a crear que va a guardar los todos y los estados
 
  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  // que va a recibir los nuevos todos o array de todos para enviarselos al localStorage y por ende al estado.


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo)=>todo.text == text
    ) 
    newTodos[todoIndex].completed = 'true';

    saveTodos(newTodos);

  };
  const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo)=>todo.text == text
  ) 
  newTodos.splice(todoIndex, 1);

  saveTodos(newTodos);
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
