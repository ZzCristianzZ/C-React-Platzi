import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch/Index';
import { TodoList } from '../TodoList/Index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton';
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
