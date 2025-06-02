import { Link } from 'react-router-dom'
import './QuickRockets.css'
import { Row, Col } from 'react-bootstrap'
import EastIcon from '@mui/icons-material/East';


function QuickRockets() {
    return (
        <div className="mt-3 pb-2 main-QuickRockets" >
            <Row>
                <Col xs={12} lg={7} className='mb-3'>
                    <div className="QuickRockets-box-7">
                        <Row className='rocket-img-row'>
                            <Col lg={6}>
                                <p className='Title-QuickRockets-litle'>Build by developers</p>
                                <h2 className='Title-QuickRockets-big'>salsal UI Dashboard</h2>
                                <p className='info-QuickRockets mb-5'>From colors, cards, typography to complex elements, you will find the full documentation.</p>
                                <Link to="/" className='linkread'>
                                    read more
                                    <EastIcon className='icon' />
                                </Link>
                            </Col>
                            <Col lg={5} className='col-5'>
                                <img src="/public/components/rocket.png" alt="" className='imgrocet' />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} lg={5}>
                    <div className="QuickRockets-box-5">
                        <div className="imgManWorking">
                            <h1 className='QuickRockets-box-5-title'>work with the salsal</h1>
                            <p className='info-QuickRockets text-white mb-4'>Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the opportunity first.</p>
                            <Link to="/" className='linkread text-white'>
                                read more
                                <EastIcon className='icon' />
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}


export default QuickRockets