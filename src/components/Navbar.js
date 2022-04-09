import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <div>
            <ul>
                <li>
                    <Link to='users'>Users Information</Link>
                </li>
                <li>
                    <Link to='/' >Home</Link>
                </li>
                <li>
                    <Link to='/About' >About</Link>
                </li>
                <li>
                    <Link to='/Contact'>Contact</Link>
                </li>
                <li>
                    <Link to = 'products'>Products</Link>
                </li>
            </ul>
        </div>
    )
}
export default Navbar