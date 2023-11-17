import './btn.css';
const Task2=()=>{
    return (
          <div className='mt-5 mb-5' > 
            <h1>Notifications</h1>
          <div>  <button className="blue"> <i class="fa-duotone fa-octagon-check"></i> Information message</button></div>
           <div> <button className="green"> <i class="fa-light fa-circle-check"></i>Success message</button></div>
           <div> <button className="yellow"> <i class="fa-solid fa-bell-slash"></i>Warning message</button></div>
           <div> <button className="red"> <i class="fa-regular fa-circle-exclamation"></i>Error message</button></div>
          </div>
    )
}
export default Task2;