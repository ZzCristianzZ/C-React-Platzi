import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import React from 'react';


// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el Curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la llorona', completed: false},
//   { text: 'LALALALA', completed: false},
//   { text: 'Usar estados derivados', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

function App() {
  
  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error,

  } = useLocalStorage('TODOS_V1', []); 
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
      (todo)=>todo.text === text
    ) 
    newItem[todoIndex].completed = 'true';

    saveTodos(newItem);

  };
  const deleteTodo = (text) => {
  const newItem = [...todos];
  const todoIndex = newItem.findIndex(
    (todo)=>todo.text === text
  ) 
  newItem.splice(todoIndex, 1);

  saveTodos(newItem);
  }
  
  return(
    <AppUI 
        loading={loading}
        error={error}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchdTodos={searchdTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      
    />
  );

}



export default App;
