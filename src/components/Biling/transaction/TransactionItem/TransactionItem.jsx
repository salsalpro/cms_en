import './TransactionItem.css'
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';


export default function TransactionItem({ title, date, upDown }) {
    return (
        <li className='Transaction-item'>
            <div className="Transaction-item-box-left-with-icon">
                {upDown > 0 ? (
                    <ArrowCircleUpOutlinedIcon className='icon text-success' />
                ) : (
                    <ArrowCircleDownOutlinedIcon className='icon red' />
                )}
                <div className="Transaction-item-box-left">
                    <h3 className='Transaction-item-title'>{title}</h3>
                    <span className='Transaction-item-time'>{date}</span>
                </div>
            </div>
            <span className={`updown ${upDown > 0 ? 'text-success' : ''}`}>{upDown > 0 ? `$ + ${upDown}` : `$ ${upDown}`}</span>
        </li>
    )
}
