import'./App.css';
import { useState } from 'react';
import Task from './Task';

function App (){
  const[todoList, setTodoList] = useState([]);
  const[newTask, setNewTask] = useState("")

  const handleChange = (event) =>{
    setNewTask(event.target.value)
  }

  const addTask =()=>{

    const task = {
      id: todoList.length ===  0 ? 1 : todoList[todoList.length-1].id + 1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task]);
    setNewTask('');
  };

  const deleteTask =(id)=>{
    setTodoList(todoList.filter((task)=>task.id !==id));
  }

  const completeTask=(id)=>{
    setTodoList(
       todoList.map((task)=>{
        if(task.id === id){
          return{...task, complete: true}
        } else{
          return task;
        }
      })
    )
  }



  return(
    <div className='App'>
      <div className='addTask'>
        <p id='ptodo'>Todo List</p>
        <input id='newTask' placeholder='Write your to do list...' onChange={handleChange} value={newTask}></input>
        <button id='badd' onClick={addTask}>Add Task</button>
        </div>


        <p id='listp'>List of work</p>
        <div className='list'>
          {todoList.map((task)=>{
            return(
              <Task taskName = {task.taskName}
              id={task.id}
              complete = {task.complete}
              deleteTask = {deleteTask}
              completeTask = {completeTask}/>
              
            )
          })}
        </div>
     
    </div>
  )
}

export default App;
