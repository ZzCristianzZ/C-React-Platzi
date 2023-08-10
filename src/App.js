import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
// Deseamos crear una funcion custom hooks, tenga que ver con todo lo que se relaciona con el localStorage.
function useLocalStorage(itemName, initialValue){
  //Vamos a crear un nuevo estado, y aqui vamos a crear el estado interno del custom hook.
  //Nuestro itemName nos sirve para reemplazar todos esos TODOS_V1, para no tener solamente ese string podamos tener una variable, que enviemos una ves, de donde estemos consumiendo nuestro custom Hook
   const localStorageItem = localStorage.getItem(itemName);
   let parsedItem;
    if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify([]));
      // Decimos aqui que por defecto el estado inicial de la aplicacion va a ser un array vacio. Eso funcion para nuestros todos, pero que pasaria si deseamos guardar algo distinto como el estado inicial, un string vacio, un nombre por defecto, un nunero, para eso creamos el paramentro InitialValue o valor inicial
      parsedItem= [];
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);
    // Este codigo utiliza el hook 'useState', para declarar una variable de estado llamada 'item', y una funcion para actualizar su valor llamada 'setItem'. El hook 'useState' es una funcion que permite agragar estado a componentes de funcion en React
    // 'useState' es una forma de declarar una variable de estado en un componente de funcion y obtener una funcion para actualizar esa variable.Mas que un ciclo estas declarando una "celda de memoria" especial que se conserva entre las llamadas a la funcion del componente. La funcion actualizadora devuelta por el 'useState' te permite actualizar el valor  de esa celda de memoria, y cuando lo haces, React se encarga de volver a renderizar el componente con el nuevo valor.

    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      
      setItem(newItem);
    };

    return [saveItem]; 

}
function App() {
  
  const [todos, setTodos] = React.useState(parsedItem); 
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
    const newItem = [...todos];
    const todoIndex = newItem.findIndex(
      (todo)=>todo.text == text
    ) 
    newItem[todoIndex].completed = 'true';

    saveTodos(newItem);

  };
  const deleteTodo = (text) => {
  const newItem = [...todos];
  const todoIndex = newItem.findIndex(
    (todo)=>todo.text == text
  ) 
  newItem.splice(todoIndex, 1);

  saveTodos(newItem);
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
