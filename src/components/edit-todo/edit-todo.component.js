// import { useState } from 'react';
import { useContext } from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


import { Edit, FirstChild, SaveTodo, SecondChild, TaskDescription, TaskName } from './edit-todo.styles';


import { TodoContext } from '../todolists/todolists.components';


const EditTodo = () => {

    const value = useContext(TodoContext);

    console.log(value);

    // const [editTask, setEditTask] = useState(value.task);
    // const [editDescription, setEditDescription] = useState(value.description);

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