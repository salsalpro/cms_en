import './profilesetting.css'
import { Row, Col } from 'react-bootstrap'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';



const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {

        borderRadius: 22 / 2,
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 16,
            height: 16,
        },
        '&::before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
            left: 12,
        },
        '&::after': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
                theme.palette.getContrastText(theme.palette.primary.main),
            )}" d="M19,13H5V11H19V13Z" /></svg>')`,
            right: 12,
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
    },
}));




export default function profilesetting() {




    return (
        <div className='pt-5 profilesetting'>
            <Row className='w-100'>
                <Col xs={12} md={6}>
                    <div className='bg-white border-radiuse p-4'>
                        <h2 className="title">Platform Settings</h2>
                        <p className='title-litle-color mt-3'>ACCOUNT</p>
                        <div>
                            <FormGroup>
                                <FormControlLabel className='my-2' control={<Android12Switch defaultChecked />} label="Email me when someone follows me" />
                                <FormControlLabel className='my-2' control={<Android12Switch defaultUnChecked />} label="Email me when someone answers on my post" />
                                <FormControlLabel className='my-2 pb-3' control={<Android12Switch defaultChecked />} label="Email me when someone mentions me" />
                            </FormGroup>
                            <p className='title-litle-color mt-4 mb-3'>APPLICATION</p>
                            <div>
                                <FormGroup>
                                    <FormControlLabel className='my-2' control={<Android12Switch defaultChecked />} label="New launches and projects" />
                                    <FormControlLabel className='my-2' control={<Android12Switch defaultChecked />} label="Monthly product updates" />
                                    <FormControlLabel className='my-2' control={<Android12Switch defaultChecked />} label="Subscribe to newsletter" />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className='bg-white border-radiuse p-4 h-100'>
                        <div className='mb-3'>
                            <h2 className="title">Profile Information </h2>
                        </div>
                        <div className='bg-white mb-5'>
                            <p className='bio'>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</p>
                        </div>
                        <div className="info3">
                            <span className='item fs-6 title d-block w-100 mb-3'>full Name:  
                                <span className='item-inside fs-6'> mohamad ali javadi</span>
                            </span>
                            <span className='item fs-6 title d-block w-100 mb-3'>Mobile:  
                                <span className='item-inside fs-6'> 09379424323</span>
                            </span>
                            <span className='item fs-6 title d-block w-100 mb-3'>Email:  
                                <span className='item-inside fs-6'> javadimohamadali44@mail.com</span>
                            </span>
                            <span className='item fs-6 title d-block w-100 mb-3'>Location:  
                                <span className='item-inside fs-6'> dubi</span>
                            </span>
                        </div>
                    </div>

                </Col>
            </Row>
        </div>
    )
}
