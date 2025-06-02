import './profile.css'
import Profilecomponent from '../../components/profile/profile/profilecomponent'
import Profilesetting from '../../components/profile/profilesetting/profilesetting'



export default function profile() {
  return (
    <div className='pt-3'>
      <Profilecomponent />
      <Profilesetting className="mt-5" />
    </div>
  )
}
