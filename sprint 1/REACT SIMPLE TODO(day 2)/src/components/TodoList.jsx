// import react from "react";

const TodoList = (props) => {

   const makeFalse=()=>{
        // console.log(props)
      props.onFalse(props.index);
   }


  //  console.log(props.items.title)
   return (
     <h3 >
       {props.items.title} {props.items.status ? "done" : "not done"}
       <button onClick={makeFalse} >FALSE</button>
     </h3>
   )

  
};

export default TodoList;
