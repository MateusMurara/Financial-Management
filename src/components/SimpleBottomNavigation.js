import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleNavigationChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/consult');
        break;
      case 2:
        navigate('/register');
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigationChange}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Consult" icon={<SearchIcon />} />
        <BottomNavigationAction label="Register" icon={<AddIcon />} />
      </BottomNavigation>
    </Box>
  );
}