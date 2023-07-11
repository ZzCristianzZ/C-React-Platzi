import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';


const defaultTodos = [
  {text: 'Cortar Cebolla', completed: true},
  {text:'Tomar el Curso de Intro a Rect.js', completed:false},
  {text: 'Llorar con la llorona', completed:false},
  {text: 'LALALALALA', completed:false}
];

function App() {
  const [searchValue, setSearchValue]= React.useState ('');
   
  console.log('Los usuarios buscan todos de ' + searchValue);
  
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch 
        //Enviamos las propiedades 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      < CreateTodoButton /> 

    </React.Fragment>
  );
}



export default App;
