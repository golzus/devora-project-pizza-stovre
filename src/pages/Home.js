import { Button, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box display="flex" justifyContent="center" mt={10}>
      <Paper elevation={4} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom color="primary">ברוכים הבאים לפיצה שלנו 🍕</Typography>
        <Typography variant="body1" mb={2}>התפריט מחכה לכם עם פיצות, פסטות, מוקרמים ועוד!</Typography>
        <Button variant="contained" color="secondary" onClick={() => navigate('/menu')}>לצפייה בתפריט</Button>
      </Paper>
    </Box>
  );
}