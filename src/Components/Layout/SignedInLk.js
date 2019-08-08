import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLk = () =>
{
    return ( 
            <ul className="right">
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Vivio</NavLink></li>
            </ul>
          )
}

export default SignedInLk