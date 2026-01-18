import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-600 text-white p-2 rounded-2xl"><h1>Hello world</h1></div>
      
        <Card name= "ABHI" surname = "GAIKWAD"/>
        <Card  name= "ADITYA" surname = "SHIVAJI"/>

    </>
  );
}

export default App;
