import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState(["card1"]);
  const [toDoItem, setToDoItem] = useState("");

  const updateInputValue = event => setToDoItem(event.target.value);

  const addCardHandler = () => {
    let newArray = [...toDoList]
    newArray.push(toDoItem)
    setToDoList(newArray)
  };

  const deleteHandler = index => {
    console.log("deleteHandler called")
    let storedList = [...toDoList]
    storedList.splice(index, 1)
    setToDoList(storedList)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <input value={ toDoItem } onChange={ updateInputValue }></input>
      <button onClick={addCardHandler}>Add To Do Item</button>
      {toDoList.map((el, index) => {
        return <ToDoItem name={el} key={index} index={index} func={deleteHandler}/>;
      })}
    </div>
  );
}

const ToDoItem = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <button index={props.index} onClick={()=>{props.func(props.index)}}>Delete</button>
    </div>
  );
};

export default App;
