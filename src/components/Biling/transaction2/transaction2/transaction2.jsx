import './transaction2.css'
import { Row, Col } from 'react-bootstrap'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useEffect, useState } from 'react';
import TransactionItem from '../TransactionItem/TransactionItem';
import BilingInformation from '../../BilingInformation/BilingInformation/BilingInformation'


export default function transaction2() {






  const [transactioninfosyesterday, settransactioninfosyesterday] = useState([])
  const [transactioninfosNew, settransactioninfosNew] = useState([])


  useEffect(() => {
    fetch('https://cmscms-a-default-rtdb.firebaseio.com/transactioninfosNew.json')
      .then(res => res.json())
      .then(res => settransactioninfosNew(Object.entries(res)[0][1]))

    fetch('https://cmscms-a-default-rtdb.firebaseio.com/transactioninfosyesterday.json')
      .then(res => res.json())
      .then(res => settransactioninfosyesterday(Object.entries(res)[0][1]))

  }, [])



  return (
    <div className='pt-3 mb-2'>
      <Row>
        <Col xs={12} md={7}>
          <BilingInformation />
        </Col>
        <Col xs={12} md={5}>
          <div className="parent same-box-shdow">
            <div className=' transaction-box bg-white p-4'>
              <h2 className='title '>Your Transaction's</h2>
              <span className='dateTitle'><CalendarMonthIcon className='mx-2' />23 - 30 March 2020</span>
            </div>
            <div className='p-4'>
              <div className="newest">
                <h2 className="title-litle-color">NEWEST</h2>
                <ul className="newest-box">
                  {transactioninfosNew.map(trans => (
                    <TransactionItem key={trans.title} {...trans} />
                  ))}
                </ul>
              </div>
              <div className="newest yester-day pt-4">
                <h2 className="title-litle-color">yester day</h2>
                <ul className="newest-box">
                  {transactioninfosyesterday.map(trans => (
                    <TransactionItem key={trans.title} {...trans} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
