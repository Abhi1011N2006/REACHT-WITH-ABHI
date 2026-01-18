import PrintName from "./name";

function App() {
  let username = "ABHI123xyz";
//when we need  to insert variable in returning vlaue of function we simply insert in between {}
  return (
    <>
      <PrintName />
      <h3>My roll no is : 332  {username}</h3>  
    </>
  );
}

export default App;
