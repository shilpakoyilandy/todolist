
import './App.css';
import Addpart from './components/Addpart/Addpart';
import Viewpart from './components/Viewpart/Viewpart';
import { useState,useEffect } from 'react';
import { TextRotationAngledownSharp } from '@material-ui/icons';
function App() {
  const [todo,setTodo]=useState([])
  
  const todolist=(e)=>{
    setTodo([...todo,{...e}])
    console.log("e",e)
    console.log("todo",todo)
  }
  const removeId=(a)=>{
    const filtdata=todo.filter((check,i,rep)=>{
   
 return (i !==a)
   });
   setTodo(filtdata)
 }
  useEffect(()=>{
    const localdata=JSON.parse(localStorage.getItem("todolistdata"));
    setTodo(localdata)
  },[])
  useEffect(()=>{
    localStorage.setItem("todolistdata",JSON.stringify(todo))
  
  },[todo]);
  
  return (
    <>
    <div><Addpart list={todolist}/></div>
        <div><Viewpart todos={todo} remove={removeId}/></div> 
       </>
  );
}

export default App;
