import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch/Index';
import { TodoList } from '../TodoList/Index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';

function AppUI ({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchdTodos,
    completeTodo,
    deleteTodo,

}) {
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
};

export { AppUI };




