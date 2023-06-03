import React, {useState, useEffect} from "react";

import { connect } from "react-redux";
import { addTodos } from "../../redux/reducer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as Oval } from "../../assets/Oval 2.svg";

import TodoList from "../todolists/todolists.components";



const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};


const Todos = (props) => {
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const [todoList, setTodoList] = useState(() => {
        // get the todos from localstorage
        const savedTodos = localStorage.getItem("todolist");
        // if there are todos stored
        if (savedTodos) {
        // return the parsed the JSON object back to a javascript object
        return JSON.parse(savedTodos);
        // otherwise
        } else {
        // return an empty array
        return [];
        }
    });

    useEffect(() => {
        // set todos to localstorage
        localStorage.setItem('todolist', JSON.stringify(todoList))
    }, [todoList]);

    const handleChange = (e) => {
        setTodo(e.target.value);
        e.preventDefault();
    };

    const handleChangeTwo = (p) => {
        setDescription(p.target.value);
        p.preventDefault();
    };

    
    
    const add = () => {
        if (todo === "" || description === "") {
            alert("Todo is empty!!");
        } else {
            const id = todoList.length + 1;
            props.addTodo(setTodoList((prevState) => [
                ...prevState, {
                    id: id,
                    task: todo,
                    description: description
                }
            ]));
            setTodo('');
            setDescription('');
        }
    };


    return (
        <div className="todo-fragment">
            <div className="todolist-components">
                <div className="todo-component">
                    <div className="todo-pack">
                        <div className="todo-list">List: Things to Buy</div>
                        <div className="describe-todo">
                            <div className="add-todo">
                                <span><Oval/></span>
                                <input type="text" onChange={(e) => handleChange(e)} value={todo} placeholder="Add Todo"/>
                            </div>
                            <input onChange={(e) => handleChangeTwo(e)} value={description} type="text" className="describe" placeholder="Add Todo Description"/>
                            <span className="plus-todo" onClick={() => add()}><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                        {todoList.map(todoList =>
                            <TodoList todoList = {todoList}/>
                        )}
                    </div>
                    <div className="todo-pack">
                        <div className="todo-list">List: Empty List</div>
                        <TodoList todoList = {todoList}/>
                    </div>
                    <div style={{position: 'relative'}}>
                        <input type="text" className="todo-list" placeholder="Add Todo-List"/>
                        <span className="plus"><FontAwesomeIcon icon={faPlus} /></span>
                    </div>
                </div>
            </div>
            <div className="edit">
                <span><FontAwesomeIcon icon={faArrowLeft} /></span>
                <span>Edit Todo</span>
            </div>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);