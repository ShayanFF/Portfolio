import { Link } from 'react-router-dom'

interface Props {
  onClick: React.MouseEventHandler<HTMLImageElement>;
  linkTo: string;
  text: string;
  image: string;
}

const NavBarButton: React.FC<Props> = ({ onClick, linkTo, text, image }) => {
  return (
    <Link to={linkTo}><img onClick={onClick} src={image} alt={text} className='nav-bar-btn' /></Link>
  )
}

export default NavBarButton