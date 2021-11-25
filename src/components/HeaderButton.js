import { Link } from 'react-router-dom'

const HeaderButton = ({ onClick, text, image }) => {
    return (
        <Link to={onClick}><img src={image} alt={text} className='header-btn' /></Link>
    )
}

export default HeaderButton
