import React from 'react'
import reactLogo from '../assets/react.svg'

function Footer() {
  return (
    <>
    <hr />
    <div className='flex justify-evenly m-6 px-6 py-4'>
        <div className='flex items-center '>
            <h3>MyLogo</h3>
            <img src={reactLogo} width={35} />
        </div>
        
        <div className='flex gap-6'>
        <ul className='grid gap-4 '>
            <li><b>RESOURCES</b></li>
            <li>Home</li>
            <li>About</li>
        </ul>
        <ul className='grid gap-4 '>
            <li><b>FOLLOW US</b></li>
            <li>Github</li>
            <li>Discord</li>
        </ul>
        <ul className='grid gap-4 '>
            <li><b>LEGAL</b></li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
        </ul>
       </div>
    </div>
    </>
  )
}

export default Footer;