import React from 'react'
import { Routes, Route, Navigate, } from 'react-router-dom'
import Home from '../Screens/home/home'
import NowPlaying from '../Screens/NowPlaying/NowPlaying'
import Popular from '../Screens/Popular/Popular'
import TopRelated from '../Screens/TopRelated/TopRelated'
import Upcoming from '../Screens/Upcoming/Upcomig'
import Search from '../Screens/home/Search/Search'

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home/now_playing'} />} />
      <Route path='/home' element ={<Home/>}>
        <Route path='now_playing' element ={<NowPlaying/>} />
        <Route path='popular' element ={<Popular/>}/>
        <Route path='top_related' element ={<TopRelated/>}/>
        <Route path='upcomig' element ={<Upcoming/>}/>
        <Route path='search' element ={<Search/>}/>
      </Route>
      <Route path='*' element={<Navigate to='/home/now_playing' />} />
    </Routes>
  )
}

export default RoutesApp
