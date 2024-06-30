import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='logo'>
                    <img src='https://images.pexels.com/photos/2157888/pexels-photo-2157888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
                </div>
                <div className='links'>
                    <Link className='link' to='/?cat=art'>
                        <h6>ART</h6>
                    </Link>
                    <Link className='link' to='/?cat=science'>
                        <h6>SCIENCE</h6>
                    </Link>
                    <Link className='link' to='/?cat=tech'>
                        <h6>TECHNOLOGY</h6>
                    </Link>
                    <Link className='link' to='/?cat=cinema'>
                        <h6>MOVIES</h6>
                    </Link>
                    <Link className='link' to='/?cat=design'>
                        <h6>DESIGN</h6>
                    </Link>      
                    <Link className='link' to='/?cat=food'>
                        <h6>FOOD</h6>
                    </Link>          
                    <span>Logan</span>    
                    <span>Logout</span> 
                    <span className = 'write'>
                        <Link className='link' to='/write'>Write</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar