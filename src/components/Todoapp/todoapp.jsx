import {useState} from "react";
import React from "react";
import './todoapp.css'


 function TodoApp(){

    const[allTodo , setallTodo] = useState([]);

    const addTodo = (evn)=>{
        evn.preventDefault();
        let input = document.querySelector('.text1');
       

        let id = !allTodo.at(-1) ? 1 : allTodo.at(-1).id
        let newTodo ={
            id:id+1,
            text:input.value,
        };
        console.log(newTodo);
        setallTodo((prev) => [...prev,newTodo]);
        input.value=null;
      
    };
      console.log(allTodo);
    return(
        <div className="todoApp">

          <h1>Toodo App</h1>
            <form onSubmit={addTodo} className="todoApp-card">
                <input  className="text1" type="text" placeholder="Enter text you"  />
            
            </form>
            

            <ul>
                {allTodo.map((todo)=>(
                    <li key={todo.id}>{todo.text}</li>
                ))}
              
            </ul>
        </div>
    )

}

        export default TodoApp;


        // const Todo = () => {
        //     const [ToDo, setToDo] = useState([]);
          
        //     function AllToDo(e) {
        //       e.preventDefault();
        //       let text = document.querySelector(".text");
          
        //       let id = !ToDo.at(-1) ? 0 : ToDo.at(-1).id;
          
        //       let obj = {
        //         id: id + 1,
        //         text: text.value,
        //       };
          
        //       setToDo((prev) => [...prev, obj]);
        //       text.value = null;
        //     }
           
          
        //     return (
        //       <div className="todoApp">
        //         <h1 className="title">To Do List</h1>
        //         <form action="" className="todoForm" onSubmit={AllToDo}>
        //           <input type="text" placeholder="Enter your text" className="text" />
        //         </form>
        //         <ul className="infoBlog">
        //           {ToDo.map((item) => {
        //             return (
        //               <li className="info" key={item.id}>
        //                 {item.text}
        //               </li>
        //             );
        //           })}
        //         </ul>
        //       </div>
        //     );
        //   };
          
        //   export default Todo;