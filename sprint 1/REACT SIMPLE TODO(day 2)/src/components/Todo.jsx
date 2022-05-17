import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import "../style/Todo.css"
const Todo = () => {
  const [add, setAdd] = useState([]);

  const dataHandler = (title) => {
    let payload = {
      title: title,
      status: true,
      id: uuidv4(),
    };

    setAdd([...add, payload]);
  };

  const falseHandler = (index) => {
    add.splice(index, 1);
    console.log(add);
    setAdd([...add]);
  };

  return (
    <>
      <h2 className="TO">TO DO</h2>
      <TodoInput data={dataHandler} />
      {/* <TodoList /> */}

      {add.map((items, index) => (
        <TodoList
          key={items.id}
          items={items}
          onFalse={falseHandler}
          index={index}
        />
      ))}
    </>
  );
};

export default Todo;
