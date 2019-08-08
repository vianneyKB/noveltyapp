import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLk from './SignedInLk'
import SignedOutLk from './SignedOutLk'

const Navbar = () =>
{
    return ( 
            <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to='/' className="brand-logo"> Novelty App</Link>
                <SignedInLk />
                <SignedOutLk />
            </div>
            </nav>
          )
}

export default Navbar;