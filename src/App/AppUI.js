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
import React from 'react';

function AppUI () {
  const {
    loading,
    error,
    searchdTodos,
    completeTodo,
    deleteTodo,
    openModal,
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
          < CreateTodoButton /> 
  {/*En este modal deberia ir todos los componentes que deseo teletranportar entre nodos de Html, y dentro de este la funcionalidad de agregar Todos.
  Al realizar esto nos encontramos con un problema y es el de darle a entender a nuestro componente modal, en que momento debe mostrarse o no, por lo que la funcion de 'Agregar Todos', es una funcion  que se muestra o se oculta segun lo necesitemos.Para ello vamos a manejar estados, que se denomine OpenModal para saber si este deberia estar abierto o no. La logica es preguntar si el estado del componenete esta abierto y si es asi entonces se debe renderizar el componente de Agregar Todo.
  */}
     {
      openModal && (
        <Modal>
          La funcionalidad de Agregar Todo
        </Modal>
      )
     }

        </React.Fragment>
      );
};

export { AppUI };




