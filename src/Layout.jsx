import React from 'react'
import Sidebar from "./components/Sidebar/Sidebar"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
  <Sidebar/>
  <Outlet/>

    </>
  )
}

export default Layout