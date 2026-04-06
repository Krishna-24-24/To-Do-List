import React, { useState, useEffect } from "react"; 
import "./App.css"; 
 
function App() { 
  const [tasks, setTasks] = useState([]); 
  const [input, setInput] = useState(""); 
  const [filter, setFilter] = useState("all"); 
 
  useEffect(() => { 
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []; 
    setTasks(savedTasks); 
  }, []); 
 
  useEffect(() => { 
    localStorage.setItem("tasks", JSON.stringify(tasks)); 
  }, [tasks]); 
 
  const addTask = () => { 
    if (input.trim() === "") return; 
    setTasks([...tasks, { text: input, completed: false }]); 
    setInput(""); 
  }; 
 
  const deleteTask = (index) => { 
    setTasks(tasks.filter((_, i) => i !== index)); 
  }; 
 
  const completeTask = (index) => { 
    setTasks( 
      tasks.map((task, i) => 
        i === index ? { ...task, completed: true } : task 
      ) 
    ); 
  }; 
 
  const toggleTask = (index) => { 
    setTasks( 
      tasks.map((task, i) => 
        i === index ? { ...task, completed: !task.completed } : task 
      ) 
    ); 
  }; 
 
  const filteredTasks = 
    filter === "completed" 
      ? tasks.filter((task) => task.completed === true) 
      : filter === "pending" 
      ? tasks.filter((task) => task.completed === false) 
      : tasks; 
 
  return ( 
    <div className="container"> 
      <h2>        To-Do List</h2> 
 
      <div className="input-section"> 
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter task..." 
          onKeyDown={(e) => e.key === "Enter" && addTask()} 
        /> 
        <button onClick={addTask}>Add</button> 
      </div> 
 
      <div className="filters"> 
        <button 
          className={filter === "all" ? "active" : ""} 
          onClick={() => setFilter("all")} 
        > 
          All 
        </button> 
 
        <button 
          className={filter === "completed" ? "active" : ""} 
          onClick={() => setFilter("completed")} 
        > 
          Completed 
        </button> 
 
        <button 
          className={filter === "pending" ? "active" : ""} 
          onClick={() => setFilter("pending")} 
        > 
          Pending 
        </button> 
      </div> 
 
      <p className="counter"> 
        Total: {tasks.length} | Completed:{" "} 
        {tasks.filter((t) => t.completed).length} 
      </p> 
 
      <ul> 
        {filteredTasks.length === 0 ? ( 
          <p style={{ textAlign: "center" }}>No tasks found        </p> 
        ) : ( 
          filteredTasks.map((task, index) => ( 
            <li key={index} className="task"> 
              <span 
                onClick={() => toggleTask(index)} 
                className={task.completed ? "completed" : ""} 
              > 
                {task.text} 
              </span> 
 
              <div className="actions"> 
                {!task.completed && ( 
                  <button 
                    onClick={() => completeTask(index)} 
                    className="complete-btn" 
                  > 
                    ✔ 
                  </button> 
                )} 
                    
                <button 
                  onClick={() => deleteTask(index)} 
                  className="delete-btn" 
                > 
                    ❌
                </button> 
              </div> 
            </li> 
          )) 
        )} 
      </ul> 
    </div> 
  ); 
} 
export default App;