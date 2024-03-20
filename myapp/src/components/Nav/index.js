import {Link} from 'react-router-dom'
import './index.css'

const Nav=()=>{
    return(
        <div className="nav">
            <Link className='item' to='/' >Home</Link>
            <Link className='item' to='/about' >About</Link>
            <Link className='item' to='/contact' >Contact</Link>
        </div>
    )
}

export default Nav