import React from 'react';

import { ReactComponent as Oval } from "../../assets/Oval 2.svg";
import { ReactComponent as Edit } from "../../assets/Group 16106.svg";


const TodoList = ({todoList}) => {

    const {task, description} = todoList;

    return(
        <>  
            <div className="describe-todo">
                <div className="add-todo">
                    <span><Oval/></span>
                    <span className="todo-one">{task}</span>
                </div>
                <span className="describe">{description}</span>
                <span className="oval"><Edit/></span>
            </div>
        </>
    )
};

export default TodoList;