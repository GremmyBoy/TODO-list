import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./Create-todo-field/CreateTodoField";

const data = [
    {
        _id: "wefw123",
        title: 'Finish essay collaboration',
        isComPleted: false
    },
    {
        _id: "wefw124",
        title: 'Read the next chapter of the book',
        isComPleted: false
    },
    {
        _id: "wefw125",
        title: 'Send the finish assigment',
        isComPleted: false
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t._id === id);
        current.isComPleted = !current.isComPleted;
        setTodos(copy);
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t._id !== id));
    }

    return(
        <div className='w-4/5 text-white mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-4'>Todo list</h1>
            {todos.map((todo) => 
            <TodoItem key={todo._id} todo={todo} changeTodo = {changeTodo} 
            removeTodo = {removeTodo}/>)}
            <CreateTodoField setTodos = {setTodos}/>
        </div>
    )
}

export default Home;