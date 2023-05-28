import { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PixIcon from '@mui/icons-material/Pix';
import FlexBetween from '@/components/FlexBetween';

const Navbar = () => {
  const { palette } = useTheme();
  const location = useLocation();
  const [selected, setSelected] = useState(
    location.pathname.slice(1) === '' ? 'dashboard' : 'predictions'
  );

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* Left side */}
      <FlexBetween gap="0.75rem">
        <PixIcon sx={{ fontSize: '28px' }} />
        <Typography variant="h4" fontSize="16px">
          Finanseer
        </Typography>
      </FlexBetween>

      {/* Right side */}
      <FlexBetween gap="2rem">
        <Box
          sx={{ '&:hover': { cursor: 'pointer', color: palette.primary[100] } }}
        >
          <Link
            to={`/`}
            onClick={() => setSelected('dashboard')}
            style={{
              color: selected === 'dashboard' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            Dashboard
          </Link>
        </Box>

        <Box
          sx={{ '&:hover': { cursor: 'pointer', color: palette.primary[100] } }}
        >
          <Link
            to={`/predictions`}
            onClick={() => setSelected('predictions')}
            style={{
              color: selected === 'predictions' ? 'inherit' : palette.grey[700],
              textDecoration: 'inherit',
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
