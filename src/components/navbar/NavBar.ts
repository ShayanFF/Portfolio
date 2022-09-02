import NavBarButton from './NavBarButton'
import Home from './images/home.png'
import About from './images/about.png'
import Projects from './images/projects.png'
import Contact from './images/contact.png'

const NavBar = () => {
    return (
        <header className='header'>
            <NavBarButton onClick='/' image={Home} text='Home' />
            <NavBarButton onClick='/about' image={About} text='About' />
            <NavBarButton onClick='/projects' image={Projects} text='Projects' />
            <NavBarButton onClick='/contact' image={Github} text='Github' />
        </header>
    )
}

export default NavBar
