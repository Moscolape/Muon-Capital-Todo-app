import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Todos = () => {
    return (
        <div className="todo-fragment">
            <div className="todolist-components">
                <div className="todo-component">
                    <div className="todo-pack">
                        <div className="todo-list">List: Things to Buy</div>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>loremwererwerwerwrerewrewrwerewrw</p>
                    </div>
                    <div className="todo-pack">
                        <div className="todo-list">List: Empty List</div>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>loremwererwerwerwrerewrewrwerewrw</p>
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