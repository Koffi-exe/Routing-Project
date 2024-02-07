import './App.css'
import { NavBar, Footer } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  return (
   <>
    <NavBar />
    <Outlet />
    <Footer />
   </>
  )
}

export default App
