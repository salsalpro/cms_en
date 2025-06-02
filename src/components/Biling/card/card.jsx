import './card.css'
import CreateIcon from '@mui/icons-material/Create';


function card({ img, numberCard }) {
    return (
        <div className='card-bling'>
            <img className='cardIMGBiling' src={img} alt="" />
            <span>{numberCard}</span>
            <CreateIcon />
        </div>
    )
}


export default card