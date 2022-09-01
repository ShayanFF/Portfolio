import NavBarButton from './NavBarButton'
import LinkButton from '../LinkButton'
import Home from './images/home.png'
import About from './images/about.png'
import Projects from './images/projects.png'
import Github from './images/github.png'
import LinkedIn from './images/linkedin.png'
// import { Spring } from 'react-spring'
// import { slideInDown } from 'react-animations'

const Header = () => {
    return (
        <header className='header'>
            <NavBarButton onClick='/' image={Home} text='Home' />
            <NavBarButton onClick='/about' image={About} text='About' />
            <NavBarButton onClick='/projects' image={Projects} text='Projects' />
            <NavBarButton onClick='/contact' image={Github} text='Github' />
        </header>
    )
}

export default Header
