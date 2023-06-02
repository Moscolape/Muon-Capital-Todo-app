import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { ReactComponent as Oval } from "../../assets/Oval 2.svg";
import { ReactComponent as Edit } from "../../assets/Group 16106.svg";



const Todos = () => {
    return (
        <div className="todo-fragment">
            <div className="todolist-components">
                <div className="todo-component">
                    <div className="todo-pack">
                        <div className="todo-list">List: Things to Buy</div>
                        <div className="describe-todo">
                            <div className="add-todo">
                                <span><Oval/></span>
                                <input placeholder="Add Todo"/>
                            </div>
                            <input className="describe" placeholder="Add Todo Description"/>
                            <span className="plus"><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
                        <div className="describe-todo">
                            <div className="add-todo">
                                <span><Oval/></span>
                                <span className="todo-one">Carrot</span>
                            </div>
                            <input className="describe" placeholder="Add Todo Description"/>
                            <span className="plus"><Edit/></span>
                        </div>
                    </div>
                    <div className="todo-pack">
                        <div className="todo-list">List: Empty List</div>
                        <div className="describe-todo">
                            <div className="add-todo">
                                <span><Oval/></span>
                                <input placeholder="Add Todo"/>
                            </div>
                            <input className="describe" placeholder="Add Todo Description"/>
                            <span className="plus"><FontAwesomeIcon icon={faPlus} /></span>
                        </div>
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

export default Todos;