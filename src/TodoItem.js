import './TodoItem.css';
import {CompleteIcon} from './CompleteIcon.js';
import {DeleteIcon} from './DeleteIcon.js';


function TodoItem(props){
  return(
  <li className="TodoItem">
    <CompleteIcon />
    {/* <span 
      className={`Icon Icon-check ${props.completed&&"Icon-check--active"}`}
      // Cuando se ejecute el evento traer a ejecutar el props.onComplete 
      onClick={props.onComplete}
    >
      V
      </span> */}
      
      <p className={`TodoItem-p ${props.completed&&"TodoItem-p--complete"}`}>{props.text}
      </p>
      <DeleteIcon />
      {/* <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
        </span> */}
      
        </li>
        );
    }


export{TodoItem};