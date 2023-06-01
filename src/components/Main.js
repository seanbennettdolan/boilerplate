import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../store';
import Todos from './Todos'
import axios from 'axios';

const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch])

    return (
        <div className='Main'>
            <Routes>
          <Route path='/todos' element='<Todos />' />
            </Routes>
            </div>
    );
};

export default Main;