import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


function useLocalStorage(itemName, initialValue){

   const localStorageItem = localStorage.getItem(itemName);
  
   let parsedItem;
    
   if (!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));

      parsedItem= initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem);
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      
      setItem(newItem);
    };

    return [item, saveItem]; 

}
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
