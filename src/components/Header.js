import HeaderButton from './HeaderButton'
import LinkButton from './LinkButton'
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
            <HeaderButton onClick='/' image={Home} text='Home' />
            <HeaderButton onClick='/about' image={About} text='About' />
            <HeaderButton onClick='/projects' image={Projects} text='Projects' />
            <LinkButton onClick='https://github.com/ShayanFF' image={Github} text='Github' />
            <LinkButton onClick='https://www.linkedin.com/in/shayanff/' image={LinkedIn} text='LinkedIn' />
        </header>
    )
}

export default Header
