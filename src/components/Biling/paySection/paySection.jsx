import './paySection.css'
import { Row, Col } from 'react-bootstrap'
import PaySection5Iremin4 from '../paySection5Iremin4/paySection5Iremin4'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import WifiIcon from '@mui/icons-material/Wifi';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Card from '../card/card';


function paySection() {

  const [paySection5Iremin4info, setpaySection5Iremin4info] = useState([])
  const [cardsUser, setcardsUser] = useState([])

  useEffect(() => {
    fetch('https://cmscms-a-default-rtdb.firebaseio.com/paySection5Iremin4info.json')
      .then(res => res.json())
      .then(data => {
        if (data) {
          setpaySection5Iremin4info(Object.entries(data)[0][1])
        }
      })

      fetch('https://cmscms-a-default-rtdb.firebaseio.com/cardsUser.json')
      .then(res => res.json())
      .then(data => {
        setcardsUser(Object.entries(data)[0][1])
      })
  }, [])

  return (
    <div className="pt-3 mb-2">
      <Row>
        <Col xs={12} md={8} >
          <Row>
            <Col xs={12} className='mb-2'>
              <div className="card-paySection">
                <WifiIcon className='icon' />
                <h2 className='card-bank-number'>4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h2>
                <div className='end-cart-number-box'>
                  <div className="left">
                    <div className='left-left-box'>
                      <span className='Card Holder'>Card Holder</span>
                      <h6 className='Jack Peterson'>Jack Peterson</h6>
                    </div>
                    <div className='left-right-box'>
                      <span className='Expires'>Expires</span>
                      <h6 className='maxdate'>11/22</h6>
                    </div>
                  </div>
                  <div className="right">
                    <img src="/public/components/card-logo.png" alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className='pt-3 mb-2'>
              <div className='moneyValueBox'>
                <div className='w-100 text-center moneyValueBoxicon-name'>
                  <div className="iconDivBox">
                    <AccountBalanceIcon />
                  </div>
                  <span className='name'>Salary</span>
                </div>
                <div className="infoMoneyBox">
                  <p className='info'>Belong Interactive</p>
                  <span className='numbermony'>+$2000</span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className='pt-3 mb-2'>
              <div className='moneyValueBox'>
                <div className='w-100 text-center moneyValueBoxicon-name'>
                  <div className="iconDivBox">
                    <i className="bi bi-paypal fs-4"></i>
                  </div>
                  <span className='name'>Paypal</span>
                </div>
                <div className="infoMoneyBox">
                  <p className='info'>Freelance Payment</p>
                  <span className='numbermony'>$455.00</span>
                </div>
              </div>
            </Col>
            <Col xs={12} className='pt-3'>
              <div className="card-end-numbers-cards mb-2">
                <div className='title-card-end-numbers'>
                  <span className="title">Payment Method</span>
                  <Button variant='contained' color='primary'>+ add new card</Button>
                </div>
                <div className='box-card-handeler pt-3'>
                  <Row>
                    {cardsUser.map(cardUser => (
                    <Col key={cardUser.img} md={6}>
                      <Card {...cardUser} />
                    </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} >
          <div className="sideBarPaySection">


            <div className='box-title-btn'>
              <h2 className='title'>Invoices</h2>
              <Button variant="outlined">view all</Button>
            </div>
            {paySection5Iremin4info.map(item => (
              <PaySection5Iremin4 key={item.code} {...item} />
            ))}

          </div>
        </Col>
      </Row>
    </div>
  )
}


export default paySection