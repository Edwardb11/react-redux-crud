import { useSelector } from "react-redux";
import "./App.css";

function App() {
 const taskState= useSelector((state) => state.tasks);
 console.log(taskState)
  return (
    <div className="App">
      <h1>Hello Wolrd</h1>
    </div>
  );
}

export default App;
