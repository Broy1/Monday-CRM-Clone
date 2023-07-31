import logo from '../images/venom_logo.png'
import { useNavigate } from 'react-router-dom'

const Nav = () =>{

    const navigate = useNavigate()

    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="controls-container">
                {/* navigate using the react dom */}
                <div className='icon' onClick={()=> navigate('/ticket')}>+</div>
                <div className='icon' onClick={()=> navigate('/')}>Home</div>
            </div>
        </nav>
    )
}

export default Nav