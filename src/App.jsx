import { useState } from 'react';
import React from 'react';
import './App.css'

function App(){
  let [count,setCount, ]= useState(0);
  let [count1,setCount1] = useState(0)
  const increment = () =>{
    if(count<100){
      setCount(count +1);
    }

    if (count===5) {
      setCount(0)
      setCount1(count1+1)
    }
    
  };

  const decrement =() =>{
    if(count>0){
         setCount(count-1)

    }

   
    if (count===0) {
      setCount1(count1-1)
      
    }
    if (count1===0) {
      setCount1(0)
    }

 
  }
  return(
   <>
   <div className='card'>
    <div>
      
   <button className='increment' onClick={increment}>+</button>
    <button className='decrement' onClick={decrement}>-</button>
    </div>

    <h1>{count}</h1>

    <h2>{count1}</h2>
   </div>
   </>
  )

}


export default App;


// function App(){
//   let [count,setCount]= useState(0);
//   // const increment = () =>{
//   //   setCount(count +1);
//   // };
//   return(
//     <>
//     <button onClick={setCount.bind(null, count +1)}>Increment</button>
//     <h1>{count}</h1>
//     </>
//   )
// }



// function App() {

//   let [count, setCount] = useState(0);

//   // const increment = () => {
//   //   setCount(count + 1);
//   // };
  
//   // console.log(increment);
//   return (
//     <>
//       <button onClick={setCount.bind(null , count + 1)}>Increment</button>
//       <h1>{count}</h1>
//     </>
//   )
// }








