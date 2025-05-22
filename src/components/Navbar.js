import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#b71c1c', boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* לוגו / שם החנות */}
        <Typography
          variant="h4"
          component={Link}
          to="/home"
          sx={{
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'inherit',
            letterSpacing: 2,
            '&:hover': {
              color: '#ffd54f',
            },
          }}
        >
          חנות הפיצה 🍕
        </Typography>

        {/* כפתורי ניווט */}
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            component={Link}
            to="/menu"
            sx={{
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#d32f2f',
                color: '#ffd54f',
              },
            }}
          >
            תפריט
          </Button>
          <Button
            component={Link}
            to="/connect"
            sx={{
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#d32f2f',
                color: '#ffd54f',
              },
            }}
          >
            צור קשר
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#d32f2f',
                color: '#ffd54f',
              },
            }}
          >
            אודותינו
          </Button>
          <Button
            component={Link}
            to="/cart"
            sx={{
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#d32f2f',
                color: '#ffd54f',
              },
            }}
          >
            סל קניות
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
