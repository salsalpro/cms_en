import './BilingInformationItem.css'
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';




export default function BilingInformationItem({ title, CompanyName, EmailAddress, VATNumber }) {
    return (
        <div className='item-BilingInformationItem-color'>
            <div className='py-3 border-radiuse item-BilingInformationItem'>
                <div className=' transaction-box'>
                    <h2 className='title'></h2>
                    <div>
                        <span className='trash text-danger'><DeleteIcon className='pointer' /> </span>
                        <span className='edit'><CreateIcon className='pointer' /> </span>
                    </div>
                </div>
            </div>

            <div className='w-100 d-block mb-2 info3'>
                <span className='item'>Company Name: 
                    <span className='item-inside'>{CompanyName}</span>
                </span>
            </div>
            <div className='w-100 d-block mb-2 info3'>
                <span className='item'>Email Address: 
                    <span className='item-inside'>{EmailAddress}</span>
                </span>
            </div>
            <div className='w-100 d-block mb-2 info3'>
                <span className='item'>VAT Number: 
                    <span className='item-inside'>{VATNumber}</span>
                </span>
            </div>
        </div>
    )
}
