import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Consult.css';

function ConsultPage() {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('records')) || [];
    setRecords(storedRecords);
  }, []);

  const handleEditClick = (record) => {
    navigate('/register', { state: { record } });
  };

  const handleDeleteClick = (recordToDelete) => {
    const updatedRecords = records.filter((record) => record.id !== recordToDelete.id);
    localStorage.setItem('records', JSON.stringify(updatedRecords));
    setRecords(updatedRecords);
  };

  const totalExpenses = records.reduce((total, record) => total + parseFloat(record.value), 0);

  return (
    <Box className="box-container">
      <Typography variant="h4" className="typography-title">
        Consultar Registros
      </Typography>
  
      {records.length === 0 ? (
        <Typography variant="body1" className="no-records-text">
          Nenhum registro encontrado.
        </Typography>
      ) : (
        <TableContainer component={Paper} className="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="table-header-cell">Ações</TableCell>
                <TableCell className="table-header-cell">Descrição</TableCell>
                <TableCell className="table-header-cell">Data</TableCell>
                <TableCell className="table-header-cell">Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleEditClick(record)}>Editar</Button>
                    <Button variant="contained" color="error" onClick={() => handleDeleteClick(record)}>Deletar</Button>
                  </TableCell>
                  <TableCell>{record.description}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{parseFloat(record.value).toFixed(2)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={2} />
                <TableCell className="table-total-cell" style={{ fontWeight: 'bold' }}>Total:</TableCell>
                <TableCell className="table-total-cell" style={{ fontWeight: 'bold' }}>
                  {totalExpenses.toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default ConsultPage;