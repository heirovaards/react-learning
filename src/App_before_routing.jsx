import React from 'react'
// router library
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListing from './components/JobListing'
import ViewAllJobs from './components/ViewAllJobs'

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<h1>My APp</h1>}/>)
);

const App = () => {
  
  return (
    <>
      <Navbar />
      <Hero tittle='Passing tittle' subtittle='Passing subtittle' />
      <HomeCards />
      <JobListing />
      <ViewAllJobs/>

     
    </>
  )
}

export default App
