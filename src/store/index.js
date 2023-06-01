import { createAsyncThunk, configureStore, createSlice } from 'reduxjs/toolkit';
import axios from 'axios';

const updateTodo = createAsyncThunk(
    'updateTodo',
    async (todo)=> {
        const response = await axios.put(`/api/todos/${todo.id}`, todo)
        return response.data
    }
);

const destroyTodo = createAsyncThunk(
    'destroyTodo',
    async (todo)=> {
        await axios.delete(`/api/todos/${todo.id}`)
        return todo;
    }
);

const createTodo = createAsyncThunk(
    'createTodo',
    async (todo, { rejectWithValue })=> {
        try {
            const response = await axios.post('/api/todos', todo)
            return response.data;
        }
        catch(ex){
            return rejectWithValue(ex.response.data);
        }
    }
);

const fetchTodos = createAsyncThunk(
    'fetchTodos',
    async ()=> {
        const response = await axios.get('/api/todos');
        return response.data;
    }
);

const todosslice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        TODO_CREATE: (state, action) => {
            return [...state, action.payload];
        },
        TODO_DESTROY: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        TODO_UPDATE: (state, action) => {
            return state.map(todo => todo.id === action.payload.id ? action.payload: todo);
        }
    },
    extraReducers: (builder)=> {
        builder.addcase(fetchTodos.fulfilled, (state, action)=> {
            return action.payload;
        })
        builder.addCase(updateTodo.fullfilled, (state, action)=> {
return state.map( todo => todo.id === action.payload.id ? action.payload: todo);
        })
        builder.addCase(createTodo.fulfilled, (state, action)=> {
            return [...state, action.payload];
        })
        builder.addCase(destroyTodo.fullfillled, (state, action)=> {
            return state.filer(todo => todo.id !== action.payload.id);
        })
    }
})

const store = configureStore({
    reducer: {
todos: todosSlice.reducer,
    }
});

export default store;

export  { destroyTodo, createTodo, updateTodo, fetchTodos}