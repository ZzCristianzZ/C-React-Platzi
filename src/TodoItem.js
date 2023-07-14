import './TodoItem.css';

function TodoItem(props){
  return(
  <li className="TodoItem">
    <span 
      className={`Icon Icon-check ${props.completed&&"Icon-check--active"}`}
      // Cuando se ejecute el evento traer a ejecutar el props.onComplete 
      onClick={props.onComplete}
    >
      V
      </span>
      <p className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}>{props.text}
      </p>
      <span className="Icon Icon-delete">
        X
        </span>
        </li>
        );
    }


export{TodoItem};