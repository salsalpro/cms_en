import './RouteSideBar.css'
import { NavLink } from 'react-router-dom'
import { IconButton } from '@mui/material'

export default function RouteSideBar(props) {
  return (
    <>
      {(props.name) ? (
        <NavLink to={props.path} className={(nav) => nav.isActive ? 'active-RouteSideBarLink' : 'disActive-RouteSideBarLink'}>
          <div className='RouteSideBarLink'>
            <IconButton aria-label="delete" size="large">
              {props.icon}
            </IconButton>
            {props.name}
          </div>
        </NavLink>
      ) : (
        <></>
      )}
    </>

  )
}
