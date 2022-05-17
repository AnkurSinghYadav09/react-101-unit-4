import  { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import TodoList from "./TodoList";

const TodoInput = (props) => {
  const [title, setTitle] = useState("");
  

  const inputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const addHandler = () => {

    props.data(title)

    // let payload = {
    //   title: title,
    //   status: true,
    //   key: uuidv4(),
    // };

    // setAdd([...add, payload]);
    // console.log(payload)
  };

  return (
    <>
      <input style={{padding:"10px" , marginRight:"10px"}} placeholder="text here" onChange={inputChangeHandler} />
      <button style={{padding:"10px" , borderRadius:"4px"}} onClick={addHandler}>ADD</button>

      {/* <TodoList /> */}

      
    </>
  );
};

export default TodoInput;
