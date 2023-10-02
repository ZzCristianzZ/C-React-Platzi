// Estoy haciendo algunas configuraciones para probar si funciona el acceso remoto desde mi portatil lenovo
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch/Index';
import { TodoList } from '../TodoList/Index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError/index';
import { EmptyTodos } from '../EmptyTodos/index';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal/index';
import React from 'react';

function AppUI () {
  const {
    loading,
    error,
    searchdTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext); 
  return (
        <React.Fragment>
          <TodoCounter />
          <TodoSearch  />

                <TodoList>
                {loading && (
                  <>
                  < TodosLoading />
                  < TodosLoading />
                  < TodosLoading />
                  </>
                )}
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
          < CreateTodoButton 
            setOpenModal={setOpenModal}
          /> 
     {
      openModal&&(
        <Modal>
          La funcionalidad de Agregar Todo
        </Modal>
      )
     }

        </React.Fragment>
      );
};

export { AppUI };

