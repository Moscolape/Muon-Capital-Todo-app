// import {useState} from 'react';

import { ReactComponent as Oval } from "../../assets/Oval 2.svg";
import { ReactComponent as Edit } from "../../assets/Group 16106.svg";
// import EditTodo from '../edit-todo/edit-todo.component';
import { createContext } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init({
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
});



export const TodoContext = createContext();


const TodoList = ({todoList}) => {

    const {task, description} = todoList;

    // const [edit, setEdit] = useState('');

    // const edited = () => {
    //     setEdit(todoList.task);
    //     setEdit(todoList.description);
    // };
    

    return(
        <>
            <TodoContext.Provider value={todoList}>
                <div data-aos="fade-up" className="describe-todo">
                    <div className="add-todo">
                        <span><Oval/></span>
                        <span className="todo-one">{task}</span>
                    </div>
                    <span className="describe">{description}</span>
                    <span className="oval"><Edit/></span>
                </div>
            </TodoContext.Provider>
        </>
    );
};

export default TodoList;