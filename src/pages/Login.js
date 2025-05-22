import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography, Paper } from '@mui/material';

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = () => navigate('/home');

  return (
    <Box mt={10} display="flex" justifyContent="center">
      <Paper elevation={4} sx={{ p: 4, width: 300 }}>
        <Typography variant="h5" mb={2} color="primary">התחברות</Typography>
        <TextField label="שם משתמש" variant="outlined" fullWidth margin="normal" />
        <TextField label="סיסמה" type="password" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="secondary" fullWidth onClick={handleLogin}>התחבר</Button>
      </Paper>
    </Box>
  );
}
