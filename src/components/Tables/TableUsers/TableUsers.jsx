import './TableUsers.css'
import { useEffect, useState } from 'react';

// import { Table } from 'react-bootstrap'

function createData(fullName, img, email, job, duty, status, date) {
    return { fullName, img, email, job, duty, status, date };
}


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Dataneedfetch = [
    createData('MohamadAli Javadi', '/public/components/Tables-people/MohamadAliJavadi.jpg', "javadimohamadali44@gmail.com", 'manager', 'mange', false, '2024/1/2'),
    createData('Rahime Hasani', '/public/components/Tables-people/RahimeHasani.jpg', 'rahimehasani@gmail.com', 'programer', 'develop', true, '2023/4/1'),
    createData('Sakine Hossainy', '/public/components/Tables-people/SakineHossainy.jpg', 'sakineHosainy@gmail.com', 'help manager', 'help', false, '2024/1/2'),
    createData('Agele Fahimi', '/public/components/Tables-people/AgeleFahimmi.jpg', 'agelefahimy@gmail.com', 'editor', 'edit', true, '2023/5/1'),
    createData('Morteza Ebmrahimi', '/public/components/Tables-people/MortezaEbrahimi.jpg', 'mortezaebrahimi@gmail.com', 'employee', 'work', true, '2023/12/1'),
]

function TableUsers() {

    // fetch('https://cmscms-a-default-rtdb.firebaseio.com/rows.json',{
    //     method: 'PUT',
    //     headers:{
    //         'content-Type':'application/json'
    //     },
    //     body: JSON.stringify(Dataneedfetch)
    // })

    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('https://cmscms-a-default-rtdb.firebaseio.com/rows.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setRows(data)
                }
            })
    }, [])

    return (
        <div className='pt-3 mb-2 TableUsers'>
            <TableContainer className='table-in-tables' component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>person</TableCell>
                            <TableCell align="center">Duty</TableCell>
                            <TableCell align="center">status</TableCell>
                            <TableCell align="center">date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.fullName}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img className='imgTables' src={row.img} alt="" />
                                    <div className='infoFullnameEmailTables'>
                                        <p className='fullNameTables'>{row.fullName}</p>
                                        <span className='emailTables'>{row.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <div className='boxJobDutyTables'>
                                        <p className='jobTables'>{row.job}</p>
                                        <span className='dutyTables'>{row.duty}</span>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <span className={`status ${row.status ? 'green' : 'gray'}`}>
                                        {row.status ? 'online' : 'ofline'}
                                        {console.log(row.status)}
                                    </span>
                                </TableCell>
                                <TableCell align="center">{row.date}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export default TableUsers

