import { useState } from 'react'
import './App.css'
import AllRoute from './INFO/Routes'
import { useRoutes } from 'react-router-dom'
import SideBar from './pages/SideBar/SideBar'
import TopBar from './components/TopBar/TopBar'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [count, setCount] = useState(0)

  let router = useRoutes(AllRoute)

  return (
    <>
      <div className='container-App'>
        <SideBar />
        <div className='topBarwithroute'>
          <TopBar />
          {router}
        </div>
      </div>
    </>
  )
}

export default App
