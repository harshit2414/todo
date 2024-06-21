import React, { useState } from 'react'

function Todolist() {
    const [inputValue, setInputValue] = useState("");
    const[todos, setTodos] = useState([]);
    function handleInputChange(e){
        setInputValue(e.target.value);

    }
    function handleAddTodos(){
        if(inputValue !== ""){
            const newTodo = {
                id: Date.now(),
                text:inputValue,
                completed:false
            };
            setTodos([...todos, newTodo]);
        }
    };

    const handleToggeleChange=(id)=>{
        const updatedTodos =todos.map((todo)=>{
            if(todo.id===id){
                return{...todo,completed: !todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodos);
        console.log(updatedTodos);
    };

        const handleRemoveTodo = (id)=>{
            const filteredTodos = todos.filter((todo)=> todo.id !==id);
            setTodos(filteredTodos);
        };

  return (
    <div>
      <div className="todo-container">
        <h1>Todo list</h1>
        <input type="text" value={inputValue} placeholder="Enter a list : " onChange={handleInputChange}/>
        <button onClick={handleAddTodos}>Add</button>
        <ul className="todo-list">
            {todos.map((todo)=>(
                <li>
                    <input type="checkbox" onChange={()=>handleToggeleChange(todo.id)}/>
                    <span>{todo.text}</span>
                    <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist
