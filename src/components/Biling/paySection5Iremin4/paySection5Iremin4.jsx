import './paySection5Iremin4.css'
import PictureAsPdfRoundedIcon from '@mui/icons-material/PictureAsPdfRounded';
export default function paySection5Iremin4(props) {
    return (
        <div className='item-paysection-4'>
            <div className='left-box-paysection-4-5'>
                <h3 className='date'>{props.date}</h3>
                <span className='code'>{props.code}</span>
            </div>
            <div className='right-box-paysection-4-5'>
                <span className='price'>${props.price} <PictureAsPdfRoundedIcon className='icon' /> </span>
            </div>
        </div>
    )
}
