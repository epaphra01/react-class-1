import logo from './logo.svg';
import './App.css';
import Socialbtns from './Components/Socialbtns';
import Task2 from './Components/task2';
import Task3 from './Components/Task3';
import Task4 from './Components/Task4';
import Task5 from './Components/Task5';
import Task1 from './class-2/Task1';
import Cartask from './class-2/Cartask';
import Fruittask from './class-2/fruittask';
import Welcome from './class-2/welcome';
import Randomnumber from './class-2/randomnumber';
import Login from './class-2/login';


function App() {
  return (
    <div className="App">
      <Socialbtns/>
      <Task2/>
      <Task3/>
      <Task4/>
      <Task5/>
      <Task1/>
      <Cartask/>
      <Fruittask/>
      <Welcome/>
      <Randomnumber/>
      <Login/>
    </div>
  );
}

export default App;
