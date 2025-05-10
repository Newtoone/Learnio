import React from 'react'
import './App.css'
import Nav from './Nav'
import Home from './Home'
// import Slider from './Slider'
// import Featuers from './Featuers'
// import Details from './Details'
// import Functions from './Functions'
// import Faq from './Faq'
// import Footer from './Footer'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import MyLearning from './MyLearning'
import Contact_me from './Contact_me'
import About from './components/About'
import Explore from './components/Explore'
import GetStart from './components/GetStart'
import SignUp from './components/SignUp'
import DSA from './pages/DSA'
import OOPs from './pages/OOPs'
import UI from './pages/UI'

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact_me" element={<Contact_me />} />
        <Route path="/MyLearning" element={<MyLearning />} />
        <Route path="/About" element={<About />} />
        <Route path="/MyLearning/DSA" element={<DSA />} />
        <Route path="/MyLearning/OOPs" element={<OOPs />} />
        <Route path="/MyLearning/UI" element={<UI />} />
        <Route path='/ExploreMore' element={<Explore />}/>
        <Route path='/GetStarted' element={<GetStart />}/>
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App