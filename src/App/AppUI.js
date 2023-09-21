// Estoy haciendo algunas configuraciones para probar si funciona el acceso remoto desde mi portatil lenovo
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch/Index';
import { TodoList } from '../TodoList/Index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError/index';
import { EmptyTodos } from '../EmptyTodos/index';
import React from 'react';

function AppUI ({
    loading,
    error,
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
            {loading && < TodosLoading />}
            {error && < TodosError />}
            {(!loading && searchdTodos.length == 0) && < EmptyTodos />}
            
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




