import './SideBar.css'
import AllRoute from '../../INFO/Routes'
import RouteSideBar from '../../components/RouteSideBar/RouteSideBar'
import { IconButton } from '@mui/material'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Link } from '@mui/material';


export default function SideBar() {
  return (

    <div className="container-sidbar">
      <div className='SideBarLogoB'>
        <p className='SideBarLogop'><img src="/public/components/logo.png" alt="" /> <span>salsal UI Dashboard</span></p>
      </div>
      <div className="sideBarRoutes">
      {AllRoute.map(route => (
          <RouteSideBar key={route.path} {...route} />
        ))}
      </div>
      <div className="doc-box">
        <IconButton >
          <StarRoundedIcon />
        </IconButton>
        <p>need help?</p>
        <h3>check our docs</h3>
        <Link >
          documation
        </Link>

      </div>
      <Link className='aup'>
        upgead to pro
      </Link>
    </div>

  )
}
