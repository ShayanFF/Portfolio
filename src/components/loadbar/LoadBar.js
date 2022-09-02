const LoadBar = ({ completed }) => {
    const [ showLoading, setShowLoading ] = React.useState(true)
    useEffect(()=>{
      setTimeout(function() {
        setShowElement(false)
           }, 3000);
         },
     [])
    return (
        <div className='load-wheel'>
            <h1 className='load-text'>Loading</h1>
        </div>
    )
}

export default LoadBar
