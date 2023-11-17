import React,{ useState } from "react";
import './class.css';

const Fruittask=()=>{
   const[sum,setsum]=useState(0);
   const[sums,setsums]=useState(0);

   const mango=()=>{
    setsum(sum+1);

   }
   const bananas=()=>{
    setsums(sums+1);
}

    return(
       <div className="abc bbbb">
        <div className="size">Bob ate <span>{sum}</span> mangos <span>{sums}</span> bananas </div>
        <div className="padding">
           <div> <img className="mango1" src="https://img.freepik.com/free-vector/vector-ripe-yellow-orange-red-whole-sliced-mango-cubes-with-leaf-isolated-white-background_1284-45465.jpg?w=740&t=st=1700135779~exp=1700136379~hmac=f168fWp5evMfbo1S3zshupqgEuad8oF4Ha96f5bd82ff58a5bb8220dfb797c480"/>
           <img className="mango1" src="https://img.freepik.com/premium-psd/banana-isolated_88281-5284.jpg?w=900"/></div>
           <div className="eat">
        <button className="mango" onClick={mango}>Eat Mango</button>
        <button className="mango" onClick={bananas}>Eat Banana</button>
        </div>
        </div>
       </div>
    )
}
export default Fruittask;