import NavBarButton from './NavBarButton'
import Home from './images/home.png'
import About from './images/about.png'
import Projects from './images/projects.png'
import Contact from './images/contact.png'
import { useState } from 'react'
import { motion } from 'framer-motion'

const NavBar: React.FC = () => {
  const [navBarPosition, setNavBarPosition] = useState<string>("home");

  const navBarVariants = {
    home: {},
    up: { y: "-35vh", scale:0.5 }
  }

  function moveNavBarUp() {
    console.log(navBarPosition);
    if (navBarPosition === "home") {
      setNavBarPosition("up");
    }
  }

  function resetNavBar() {
    if (navBarPosition !== "home") {
      setNavBarPosition("home");
    }
  }

  return (
    <motion.div animate={navBarPosition} variants={navBarVariants} className="nav-bar">
      <NavBarButton onClick={resetNavBar} linkTo='/' image={Home} text='Home' />
      <NavBarButton onClick={moveNavBarUp} linkTo='/about' image={About} text='About' />
      <NavBarButton onClick={moveNavBarUp} linkTo='/projects' image={Projects} text='Projects' />
      <NavBarButton onClick={moveNavBarUp} linkTo='/contact' image={Contact} text='Contact' />
    </motion.div>
  )
}

export default NavBar