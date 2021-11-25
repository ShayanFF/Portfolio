const LinkButton = ({ onClick, text, image }) => {
    return (
        <a href={onClick}><img src={image} alt={text} className='header-btn' /></a>
    )
}

export default LinkButton
