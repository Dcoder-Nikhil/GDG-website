import {} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import Home from "./Pages/Home"
import Event from "./Pages/Events"
import Gallery from "./Pages/Gallery"
import Team from "./Pages/Team"
import FAQ from "./Pages/FAQ"
import JoinUs from "./Pages/JoinUs"
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import About from './Pages/About'


function App() {

  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/event" exact element={<Event/>} />
          <Route path="/gallery" exact element={<Gallery/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/teams" exact element={<Team/>} />
          <Route path="/faq" exact element={<FAQ/>} />
          <Route path="/join" exact element={<JoinUs/>} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
