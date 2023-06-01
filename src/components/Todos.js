import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, destroyTodo, fetchTodos } from '../store';
import { Link, useParams } from 'react-router-dom';

const Todos = ()=> {
    const { todos } = useSelector(state => state);
    const { term } = useParams();
    const dispatch = useDispatch();

    return (
        <div>
            <ul>
{map.todos((todo) => todo)}
            </ul>
        </div>
    )
}

export default Todos;