// import {useState} from 'react';

import { ReactComponent as Oval } from "../../assets/Oval 2.svg";
import { ReactComponent as Edit } from "../../assets/Group 16106.svg";
// import EditTodo from '../edit-todo/edit-todo.component';
import { useState } from "react";


const TodoList = ({todoList}) => {

    const {task, description} = todoList;

    const [edit, setEdit] = useState('');

    const edited = () => {
        setEdit(todoList.task);
    };
    

    return(
        <>  
            <div className="describe-todo">
                <div className="add-todo">
                    <span><Oval/></span>
                    <span className="todo-one">{task}</span>
                </div>
                <span className="describe">{description}</span>
                <span className="oval" title={todoList.id} onClick={edited}><Edit/></span>
            </div>
            {/* <div style={{width: '500px'}}><EditTodo edit={edit}/></div> */}
            <p>{edit}</p>
        </>
    );
};

export default TodoList;