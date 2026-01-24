import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputBox from './component/InputBox'
import UseCurrencyInfo from './Hooks/UsedCurrencyInfo'
import backgroundImage from './assets/back.jpeg'



function App() {
  const [amount , setAmount] =useState(0);
  const [from , setFrom] = useState("usd");
  const [To , setTo] = useState("inr");
  const [convertedAmnt , setConvertedAmnt] = useState(0)

  const currencyInfo = UseCurrencyInfo(from);
  const option = Object.keys(currencyInfo);
  const amntDisable = false;

   const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmnt(amount)
    setAmount(convertedAmnt)
  }


  const convert=()=>{ 
    if (currencyInfo[To]) {
    setConvertedAmnt(amount * currencyInfo[To]);
  }}
  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage : `url('${backgroundImage})`
      }}
    >
      <div className="w-full">
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form 
            onSubmit={(e)=>{e.preventDefault();convert()}}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions ={option}
                  onCurrencyChange = {(currency)=>setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5" >
                <button
                  type="button"
                   className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2
                    border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                    onClick = {swap}
                >Swap</button>

              </div>
               <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmnt}
                  currencyOptions ={option}
                  onCurrencyChange = {(currency)=>setTo(currency)}
                  selectCurrency={To}
                  amntDisable
                />
              </div>
              <button type= "submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
              > Convert {from.toUpperCase()} to {To.toUpperCase()}</button>
            </form>
      </div>
      </div>
    </div>
      
    </>
  )
}

export default App



// import { useState } from 'react'
// import InputBox from './component/InputBox'
// import UseCurrencyInfo from './Hooks/UsedCurrencyInfo'
// import backgroundImage from './assets/back.jpeg' // Ensure file is in src/assets

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr"); // Lowercase 'to' is more standard
//   const [convertedAmnt, setConvertedAmnt] = useState(0)

//   const currencyInfo = UseCurrencyInfo(from);
//   const options = Object.keys(currencyInfo);

//   const swap = () => {
//     setFrom(to);
//     setTo(from);
//     setAmount(convertedAmnt);
//     setConvertedAmnt(amount);
//   }

//   const convert = () => { 
//     if (currencyInfo[to]) {
//       setConvertedAmnt(amount * currencyInfo[to]);
//     }
//   }

//   return (
//     <div className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
//       style={{ backgroundImage: `url('${backgroundImage}')` }}
//     >
//       <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
//         <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
//           <div className='w-full mb-1'>
//             <InputBox
//               label="From"
//               amount={amount}
//               currencyOptions={options}
//               onCurrencyChange={(currency) => setFrom(currency)}
//               onAmountChange={(amount) => setAmount(amount)}
//               selectCurrency={from}
//             />
//           </div>
//           <div className="relative w-full h-0.5">
//             <button
//               type="button"
//               className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//               onClick={swap}
//             >
//               SWAP
//             </button>
//           </div>
//           <div className='w-full mt-1 mb-4'>
//             <InputBox
//               label="To"
//               amount={convertedAmnt}
//               currencyOptions={options}
//               onCurrencyChange={(currency) => setTo(currency)}
//               selectCurrency={to}
//               amntDisable={true}
//             />
//           </div>
//           <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//             Convert {from.toUpperCase()} to {to.toUpperCase()}
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }