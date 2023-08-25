import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../components/Header'
function Mainroot() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Mainroot