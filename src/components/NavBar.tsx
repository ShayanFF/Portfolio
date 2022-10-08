import NavBarButton from './NavBarButton'
import Home from './images/home.png'
import About from './images/about.png'
import Projects from './images/projects.png'
import Contact from './images/contact.png'
import { useState } from 'react'

const NavBar: React.FC = () => {
  const [navBarPosition, setNavBarPosition] = useState<string>("CENTER");

  function moveNavBarUp() {
    if (navBarPosition === "CENTER") {
      setNavBarPosition("UP");
    }
  }

  function resetNavBar() {
    if (navBarPosition !== "CENTER") {
      setNavBarPosition("CENTER");
    }
  }

  return (
    <div className='nav-bar'>
      <NavBarButton onClick={resetNavBar} linkTo='/' image={Home} text='Home' />
      <NavBarButton onClick={moveNavBarUp} linkTo='/about' image={About} text='About' />
      <NavBarButton onClick={moveNavBarUp} linkTo='/projects' image={Projects} text='Projects' />
      <NavBarButton onClick={moveNavBarUp} linkTo='/contact' image={Contact} text='Contact' />
    </div>
  )
}

export default NavBar