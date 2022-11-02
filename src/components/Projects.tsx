import Home from './images/home.png'
import ProjectButton from './ProjectButton'

const Projects: React.FC = () => {
  return (
    <div className='proj-container'>
      <ProjectButton linkTo='https://github.com/ShayanFF/Portfolio' text='Portfolio' image={Home}/>
      <ProjectButton linkTo='https://github.com/ShayanFF/QixGame' text='Qix Game' image={Home}/>
      <ProjectButton linkTo='https://github.com/ShayanFF/CPS530-Final' text='CPS530 Final' image={Home}/>
    </div>
  )
}

export default Projects