import { useState, useCallback,useEffect,useRef } from 'react'
// import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [password, setpassword] = useState("");
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) char += "1234567890";
    if (charAllowed) char += "!@#$%^&*(){}:<>/?.,;'~`";

    for (let i = 1; i <= length; i++) {
      let randChar = Math.floor(Math.random() * char.length + 1);
      pass += char.charAt(randChar);

    }
    setpassword(pass);
  }, [length, numAllowed, charAllowed, setpassword])
  useEffect(()=>{
    passwordGenerator();
  },[length, numAllowed, charAllowed])

  let passref = useRef(null);
  let copypass = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
    passref.current?.select();
    // alert("Password is copied on clipboard")
  },[password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h2 className='mb-4 text-center pt-4'>Generated Password</h2>
        <div className='flex shadow-xl rounded-1g overflow-hidden mb-4 p-4 border border-gray-800'>

          <input type="text" placeholder='Password' value={password} className='w-full' readOnly ref={passref} />
          <button className='bg-blue-600 text-white p-2 rounded-2g'
            onClick={copypass}
            >Copy</button>

        </div>
        <div className='flex items-center gap-4 '>
          <input type="range" min={6} max={15} value={length} className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label> Length : {length} </label>
            <input type="checkbox" defaultChecked={numAllowed}
            onChange={()=>{
              setnumAllowed(!numAllowed);
            }} />
            <label htmlFor="">Number</label>
            <input type="checkbox" defaultChecked={charAllowed}
            onChange={()=>{
              setcharAllowed(!charAllowed);
            }} />
            <label htmlFor="">Character</label>
        </div>
      </div>

    </>
  )
}

export default App
