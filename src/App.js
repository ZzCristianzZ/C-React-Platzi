import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
// Deseamos crear una funcion custom hooks, tenga que ver con todo lo que se relaciona con el localStorage.
function useLocalStorage(){
  //Vamos a crear un nuevo estado, y aqui vamos a crear el estado interno del custom hook.
  const [item, setItem] = React.useState();
  // Este codigo utiliza el hook 'useState', para declarar una variable de estado llamada 'item', y una funcion para actualizar su valor llamada 'setItem'. El hook 'useState' es una funcion que permite agragar estado a componentes de funcion en React
  // 'useState' es una forma de declarar una variable de estado en un componente de funcion y obtener una funcion para actualizar esa variable.Mas que un ciclo estas declarando una "celda de memoria" especial que se conserva entre las llamadas a la funcion del componente. La funcion actualizadora devuelta por el 'useState' te permite actualizar el valor  de esa celda de memoria, y cuando lo haces, React se encarga de volver a renderizar el componente con el nuevo valor.

   const localStorageTodos = localStorage.getItem('TODOS_V1');
   let parsedTodos;
    if (!localStorageTodos){
      localStorage.setItem('TODOS_V1', JSON.stringify([]));
      parsedTodos([]);
    }else{
      parsedTodos = JSON.parse(localStorageTodos);
    }

    const saveTodos = (newTodos) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
      setTodos(newTodos);
    }
}
function App() {
  
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
