import './Dashbord.css'
import StateCart from '../../components/DashBord/StateCart/StateCart'
import { Row, Col } from 'react-bootstrap'
import StateCartsInfo from '../../INFO/StatecartsInfo'
import { useState, useEffect } from 'react'
import QuickRockets from '../../components/DashBord/QuickRockets/QuickRockets'
import ChartsDashboard from '../../components/DashBord/chartsDashbord/chartsDashbord'


function Dashbord() {


  const [inFetch, setinFetch] = useState(StateCartsInfo)

  useEffect(() => {
    setinFetch(StateCartsInfo)
    fetch('https://cmscms-a-default-rtdb.firebaseio.com/statecartsfetch.json', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(inFetch)
    })
  }, [])


  useEffect(() => {
    setinFetch(StateCartsInfo)
    fetch('https://cmscms-a-default-rtdb.firebaseio.com/statecartsfetch.json', {
      method: 'PUT',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(inFetch)
    })
  }, [inFetch])





  return (
    <>
      <div className='statecartbox mt-3 pb-2'>
        <Row className='w-100'>
          {inFetch.map(state => (
            <Col xs={12} lg={3} key={state.stateName} className='mb-3 mb-lg-0' >
              <StateCart {...state}></StateCart>
            </Col>
          ))}
        </Row>
      </div>
      <QuickRockets />
      <ChartsDashboard />
    </>
  )
}


export default Dashbord