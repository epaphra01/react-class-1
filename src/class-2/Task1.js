import './class.css';
import{useState} from 'react';
const Task1=()=>{
   const [count,setcount]=useState(0);
   
   const onincrement=()=>{
    setcount(prevCount=>prevCount+1)
      
    }
    

    return(
        <div className="abc">
            <h1>This button has been clicked<p className='red-green'>{count}</p>times.</h1>
            <p>click the button to increase the count</p>
            <button className='carmar2' onClick={ onincrement}  >click me</button>
        </div>
    )
}
export default Task1;