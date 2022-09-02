import { Link } from 'react-router-dom'

const NavBarButton = ({ onClick, text, image }) => {
    return (
        <Link to={onClick}><img src={image} alt={text} className='navbar-btn' /></Link>
    )
}

export default NavBarButton