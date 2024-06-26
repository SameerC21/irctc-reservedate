import React from 'react'
// import { Link } from 'react-router-dom';
import './Header.css'
import '../../App.css'


function Header() {
  return (
    <header>
        <div className='d-flex'>
            <h2>Indian Rail Wizard</h2>
            {/* <Link to = "#">IRCTC Date Calculator</Link> */}
        </div>
    </header>
  )
}


export default Header;
