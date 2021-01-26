import React, { useState } from "react";
import { store, removeTask } from "../store";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

 export type TaskProps = {
  id: number,
  title: string
}

const Task: React.FC<TaskProps> = ({id, title}) => {

  const [isChecked, setIsChecked] = useState(false);

  return (
      <div className="list_items">
        <div className="inp_lab">
          <input
            onClick={() => setIsChecked(true)}
            type="checkbox"
            disabled={isChecked}
            name="checked"
          />
          <label style={isChecked ? { textDecoration:"line-through"} : {}}>{title}</label>
        </div>

        <div className="actions">
          <FontAwesomeIcon 
          icon={faTrash}
          title="delete task" 
          size="2x" 
          onClick={() => store.dispatch(removeTask({id}))} 
          style={{cursor:"pointer"}}/>
          
        </div>
      </div>
  );
};

export default Task;