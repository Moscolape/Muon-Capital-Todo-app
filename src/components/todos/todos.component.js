import React, {useState, useEffect} from "react";

import { connect } from "react-redux";
import { addTodos, addLists, updateTodos } from "../../redux/reducer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as Oval } from "../../assets/Oval 2.svg";

import TodoList from "../todolists/todolists.components";
import EditTodo from "../edit-todo/edit-todo.component";

// import {edited} from "../todolists/todolists.components";



const mapStateToProps = (state) => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    addList: (obj) => dispatch(addLists(obj)),
    updateTodo: (obj) => dispatch(updateTodos(obj))
  };
};


const Todos = (props) => {
    const [todo, setTodo] = useState('');
    const [description, setDescription] = useState('');
    const [newList, setNewList] = useState('');

    const [newTodoList, setNewTodoList] = useState(() => {
        // get the todos from localstorage
        const savedTodoLists = localStorage.getItem("new-todolist");
        // if there are todos stored
        if (savedTodoLists) {
        // return the parsed JSON object back to a javascript object
        return JSON.parse(savedTodoLists);
        // otherwise
        } else {
        // return an empty array
        return [];
        }
    });

    useEffect(() => {
        // set todolists to localstorage
        localStorage.setItem('new-todolist', JSON.stringify(newTodoList))
    }, [newTodoList]);


    const [todoList, setTodoList] = useState(() => {
        // get the todos from localstorage
        const savedTodos = localStorage.getItem("todolist");
        // if there are todos stored
        if (savedTodos) {
        // return the parsed JSON object back to a javascript object
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
    
    const handleChangeThree = (w) => {
        setNewList(w.target.value);
        w.preventDefault();
    };

    const handleChangeFour = (f) => {
        setTodo(f.target.value);
        f.preventDefault();
    };

    const handleChangeFive = (q) => {
        setDescription(q.target.value);
        q.preventDefault();
    };
    
    const add = () => {
        if (todo === "" || description === "") {
            alert("You tried to input an empty task and/or description!!");
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

    const addList = () => {
        if (newList === "") {
            alert("You tried to add an empty list")
        } else {
            props.addList(setNewTodoList((prev) => [
                ...prev, [
                    newList
                ]
            ]))
            setNewList('');
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
                            <input onChange={(p) => handleChangeTwo(p)} value={description} type="text" className="describe" placeholder="Add Todo Description"/>
                            <span className="plus-todo" onClick={() => add()}><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                        {todoList.map(todoList =>
                        <div key={todoList.id}>
                            <TodoList todoList = {todoList}/>
                        </div>
                        )}
                    </div>
                    {newTodoList.map(newList => 
                    <div className="todo-pack">
                        <div className="todo-list">List: {newList}</div>
                        <div className="describe-todo">
                            <div className="add-todo">
                                <span><Oval/></span>
                                <input type="text" onChange={(f) => handleChangeFour(f)} value={todo} placeholder="Add Todo"/>
                            </div>
                            <input onChange={(q) => handleChangeFive(q)} value={description} type="text" className="describe" placeholder="Add Todo Description"/>
                            <span className="plus-todo" onClick={() => add()}><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                    </div>)}
                    {/* {todoList.map(todoList =>
                        <TodoList todoList = {todoList}/>
                    )} */}
                    <div style={{position: 'relative'}}>
                        <input onChange={(w) => handleChangeThree(w)} value={newList} type="text" className="todo-list" placeholder="Add Todo-List"/>
                        <span  onClick={() => addList()} className="plus"><FontAwesomeIcon icon={faPlus} /></span>
                    </div>
                </div>
            </div>
            <EditTodo todoList={todoList}/>
        </div>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);