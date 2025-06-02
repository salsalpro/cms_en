import './profilecomponent.css'
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';


export default function profilecomponent() {
  return (
    <div className='border-radiuse p-4 profilecomponent'>
      <div className="profile-man">
        <div className="box-left">
          <img className='image-user' src="/public/components/Tables-people/MohamadAliJavadi.jpg" alt="" />
          <div className='d-inline-block ps-3 position-relative username-username-haneler'>
            <span className='username'>MohamadAli Javadi</span>
            <span className='job-work'>manger / mange</span>
          </div>
        </div>
        <div className="box-right me-4 h-100">
          <span className='iconHandeler'>
            <WidgetsIcon /> App
          </span>
          <span className='iconHandeler'>
            <SettingsRoundedIcon /> message
          </span>
          <span className='iconHandeler'>
            <WidgetsIcon /> setting
          </span>
        </div>
      </div>
    </div>
  )
}
