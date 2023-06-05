// import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Edit, FirstChild, SaveTodo, SecondChild, TaskDescription, TaskName } from './edit-todo.styles';


const EditTodo = (props) => {

    // const {task, description} = todoList;

    // const [editTask, setEditTask] = useState('');
    // const [editDescription, setEditDescription] = useState('');

    // const handleEditTask = (e) => {
    //     setEditTask(props.edit);
    // }

    // const handleEditDescription = (e) => {
    //     setEditDescription(description);
    //     console.log('value: ', e.target.value);
    // }

    return(
        <Edit>
            <FirstChild><FontAwesomeIcon icon={faArrowLeft} /></FirstChild>
            <SecondChild>Edit Todo</SecondChild>
            <TaskName type="text"/>
            <TaskDescription rows={5} cols={30} />
            <SaveTodo title="Save edit">Save</SaveTodo>
        </Edit>
    )
};

export default EditTodo;