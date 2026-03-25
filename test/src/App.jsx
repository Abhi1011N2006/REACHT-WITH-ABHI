import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    import { Link, NavLink } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

function Navbar() {
  // Helper function to keep the JSX clean
  const navLinkStyles = ({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-700 ${
      isActive ? "text-orange-700" : "text-gray-700"
    }`;

  return (
    <nav className="flex items-center justify-evenly px-6 py-4 bg-green-200 shadow-sm">
      {/* Brand Section */}
      <div className='flex items-center gap-2'>
        <h4 className="font-bold">MyLogo</h4>
        <img src={reactLogo} alt="React Logo" className="w-8 h-8" />
      </div>
       
      {/* Navigation Links */}
      <div className='flex gap-6'>
        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
        <NavLink to="/about" className={navLinkStyles}>About</NavLink>
        <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
        <NavLink to="/github" className={navLinkStyles}>Github</NavLink>
      </div>

      {/* Action Buttons */}
      <ul className='flex gap-6 list-none items-center'>
        <li><button className="hover:opacity-70">Log in</button></li>
        <li>
          <button className="bg-white px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100">
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
    </>
  )
}

export default App
