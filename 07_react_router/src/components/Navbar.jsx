import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import Home from './Home'
import About from './About'
import {NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkStyles = ({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 lg:border-0 lg:p-0 hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-700 ${
      isActive ? "text-orange-700" : "text-gray-700"
    }`;
  return (
    <>
    <nav className="fixed w-full z-20 flex items-center justify-evenly px-6 py-4 bg-green-200 shadow-sm ">
      <div className='flex items-center'>
        <h4>MyLogo</h4>
        <img src={reactLogo} />
      </div>
       
      <div className='flex gap-6 '>
      <Link to="/" className={navLinkStyles}>Home</Link>
      <Link to="/about" className={navLinkStyles}>About</Link>
      <Link to="/contact" className={navLinkStyles} >Contact</Link>
      <Link to="/github" className={navLinkStyles} >Github</Link>
      </div>
      <ul className='flex gap-6 list-none'>
        <li><button>Log in</button></li>
        <li><button>Get Started</button></li>
      </ul>
      
    </nav>
    </>
  )
}

export default Navbar