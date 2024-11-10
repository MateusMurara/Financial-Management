import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

function RegisterPage() {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.record) {
      const { record } = location.state;
      setDescription(record.description);
      setValue(record.value);
      setDate(record.date);
      setIsEditing(true);
    }
  }, [location.state]);

  const saveRecord = () => {
    if (!description || !value || !date) {
      alert('Please fill in all fields.');
      return;
    }

    const record = { 
      id: isEditing ? location.state.record.id : Date.now().toString(),
      description, 
      value: parseFloat(value), 
      date: date
    };

    const records = JSON.parse(localStorage.getItem('records')) || [];
    if (isEditing) {
      const updatedRecords = records.map(r => r.id === record.id ? record : r);
      localStorage.setItem('records', JSON.stringify(updatedRecords));
    } else {
      records.push(record);
      localStorage.setItem('records', JSON.stringify(records));
    }

    navigate('/consult');
  };

  return (
    <Box sx={{ width: '100%', padding: '16px' }}>
      <Typography variant="h4" gutterBottom>{isEditing ? 'Edit' : 'Register'}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField 
            label="Description" 
            variant="outlined" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            fullWidth 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Value" 
            variant="outlined" 
            type="number" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            fullWidth 
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Date" 
            variant="outlined" 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            fullWidth 
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={saveRecord}>Save</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default RegisterPage;
