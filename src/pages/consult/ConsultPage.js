import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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

  return (
    <Box sx={{ width: '100%', padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Consultar Registros
      </Typography>

      {records.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          Nenhum registro encontrado.
        </Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Ações</strong></TableCell>
                <TableCell><strong>Descrição</strong></TableCell>
                <TableCell><strong>Valor</strong></TableCell>
                <TableCell><strong>Data</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleEditClick(record)}>
                      Editar
                    </Button>
                  </TableCell>
                  <TableCell>{record.description}</TableCell>
                  <TableCell>{record.value.toFixed(2)}</TableCell>
                  <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default ConsultPage;
