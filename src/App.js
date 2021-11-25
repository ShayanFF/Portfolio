// import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
// import LoadingBar from './components/LoadingBar'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Route path='/' exact render={(props) => (
          <>
          </>
        )} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
