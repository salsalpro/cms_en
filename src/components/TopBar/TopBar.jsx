import './TopBar.css'

import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function TopBar() {
    let location = useLocation()
    const [IsFixed, setIsFixed] = useState(false)

    const hendelScroll = () => {
        if (window.scrollY > 1) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', hendelScroll)
    }, [])



    return (
        <Navbar expand="lg" className={`topbarnav ${IsFixed?'fixNav':'bg-body-tertiary'}`}>
            <Container fluid>
                <Row className='w-100 px-3'>
                    <Col md={4}>
                        <Link className='linkHome' to="/">
                            <HomeRoundedIcon />
                        </Link>
                        <span>
                            {location.pathname}
                        </span>
                    </Col>
                    <Col md={8}>
                        <div className="formSearching">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 inputSearching"
                                aria-label="Search"
                            >
                            </Form.Control>
                            <Link to="/signin" className='signin'>
                                <AccountCircleIcon className='signinIcon' />sign In</Link>
                            <IconButton className="setting">
                                <Settings className='settingIcon' />
                            </IconButton>
                            <IconButton className='bell'>
                                <NotificationsRoundedIcon className='nottifIcon' />
                            </IconButton>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    );
}

export default TopBar



