interface Props {
  linkTo: string;
  text: string;
  image: string;
}

const ProjectButton: React.FC<Props> = ({ linkTo, text, image }) => {
  return (
      <a href={linkTo} target="_blank" className='proj-btn'>
        <img className='proj-btn-image' src={image} />
        <div className='proj-btn-text'>{text}</div>
      </a>
  )
}

export default ProjectButton