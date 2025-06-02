import './StateCart.css'
import { Row, Col } from 'react-bootstrap'
import { IconButton } from '@mui/material';

function between3coma (e) {
    return e.toLocaleString('en-US')
}


export default function StateCart(props) {
    return (
        <div className='stateCart W-100'>
            <Row className='W-100'>
                <Col xs={9}>
                    <p className='stateName'>{props.stateName}</p>
                    <h2 className='number'>${between3coma(props.number)}
                        <span className={`percent ${props.percent < 0 ? 'less' : ''}`}>{props.percent}%</span>
                    </h2>
                </Col>
                <Col xs={3}>
                    <IconButton className='iconbutton'>
                        {props.icon}
                    </IconButton>
                </Col>
            </Row>
        </div>
    )
}
