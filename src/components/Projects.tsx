import Portfolio from './images/portfolio.png'
import Qix from './images/qix.png'
import Calculator from './images/calculator.png'
import ProjectButton from './ProjectButton'

const Projects: React.FC = () => {
  return (
    <div className='proj-container'>
      <ProjectButton linkTo='https://github.com/ShayanFF/Portfolio' text='Portfolio' image={Portfolio}/>
      <ProjectButton linkTo='https://github.com/ShayanFF/QixGame' text='Qix Game' image={Qix}/>
      <ProjectButton linkTo='https://shayanff.github.io/CPS530-Final/' text='CPS530 Final' image={Calculator}/>
    </div>
  )
}

export default Projects