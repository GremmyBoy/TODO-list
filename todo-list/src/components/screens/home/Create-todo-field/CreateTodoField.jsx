import React, { useState } from "react";

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        setTodos(prev =>[...prev, 
            {
            _id: new Date(),
            title,
            isComPleted: false
        }])
        setTitle('');
    }

    return(
        <div className='flex 
        items-center 
        justify-between 
        mb-4 rounded-2xl
        bg-gray-800 p-5 w-full mt-20'>
            <input type="text" className="text-white bg-transparent w-full rounded-2xl border-2 px-5 py-2 outline-none" onChange={e => setTitle(e.target.value)} 
            value={title}
            onKeyPress={e => e.key === "Enter" && addTodo(title.trim())}
            placeholder="Enter ToDo"/>
        </div>
    )
}

export default CreateTodoField;