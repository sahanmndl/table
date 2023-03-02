import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';

const TablePage = () => {

    const theme = useTheme();
    const [data, setData] = useState([])
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const fetchData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
            const json = await response.json()
            setData(json)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    })

    return (
        <TableContainer component={Paper} sx={{ width: isMobile ? '100%' : '50%', margin: 'auto'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>UserId</TableCell>
                        <TableCell>Id</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((it) => (
                        <TableRow key={it.id}>
                            <TableCell>{it.userId}</TableCell>
                            <TableCell>{it.id}</TableCell>
                            <TableCell>{it.title}</TableCell>
                            <TableCell>{it.completed === true ? "Yes" : "No"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TablePage