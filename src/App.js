import React from "react";
import { useState } from "react";
import "./App.css";
import './images/add-button.svg'

function App() {
  const [toDoList, setToDoList] = useState(["Do some coding...","And then do some more!"]);
  const [toDoItem, setToDoItem] = useState("");

  const updateInputValue = event => setToDoItem(event.target.value);

  const addCardHandler = () => {
    let newArray = [...toDoList]
    newArray.push(toDoItem)
    setToDoList(newArray)
  };

  const deleteHandler = index => {
    let storedList = [...toDoList]
    storedList.splice(index, 1)
    setToDoList(storedList)
  }

  return (
    <div className="container">
      <h1 className="main-heading">To Do List</h1>
      <div className="addToDo">
        <input className="input" placeholder="Add to do list item" value={ toDoItem } onChange={ updateInputValue }></input>
        {/* <img src="./images/plus.png" alt="add"></img> */}
        <button className="cta" onClick={addCardHandler}>Add</button>
      </div>
      
      {toDoList.map((el, index) => {
        return <ToDoItem name={el} key={index} index={index} func={deleteHandler}/>;
      })}
    </div>
  );
}

const ToDoItem = (props) => {
  return (
    <div className="to-do-item">
      <p>{props.name}</p>
      <button id="delete-button" index={props.index} onClick={()=>{props.func(props.index)}}>X</button>
    </div>
  );
};

export default App;
