import React from 'react'

interface Todo{
    id: number;
    title: string;
    completed: string;
}

export async function LyceeList() {
  
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {cache: 'no-store'});
    const todoList: Todo[] = await res.json();

    
    return (
      <div>
          <h1>Todo List</h1>
          <ul>
            {todoList.map(todoObj => <li key={todoObj.id}>Title: {todoObj.title}</li>)}
          </ul>
      </div>
    )
}