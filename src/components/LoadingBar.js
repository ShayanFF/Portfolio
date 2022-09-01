const LoadingBar = ({ completed }) => {
    return (
        <div className='full-bar'>
            <div className='prog-bar' style={{
                width: `${completed}%`
            }}>
                <h1 className='bar-percent'>{done}%</h1>
            </div>
        </div>
    )
}

export default LoadingBar
