import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
import React from 'react';


function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); 
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
