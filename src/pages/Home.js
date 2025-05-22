import { Button, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      sx={{
        backgroundColor: theme.palette.background.default,
        px: 2,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          p: 6,
          maxWidth: 460,
          textAlign: 'center',
          borderRadius: 5,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `0 12px 30px ${theme.palette.primary.main}99`,
          userSelect: 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: `0 18px 40px ${theme.palette.primary.main}cc`,
          },
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontWeight: '900',
            letterSpacing: 3,
            textShadow: `2px 2px 6px ${theme.palette.secondary.main}bb`,
            mb: 3,
          }}
        >
          ברוכים הבאים לפיצה שלנו 🍕
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: theme.palette.text.primary,
            fontWeight: 600,
            fontSize: '1.15rem',
            letterSpacing: 0.5,
          }}
        >
          התפריט מחכה לכם עם פיצות, פסטות, מוקרמים ועוד!
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/menu')}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            fontWeight: 'bold',
            fontSize: '1.1rem',
            paddingX: 5,
            paddingY: 1.5,
            borderRadius: 3,
            boxShadow: `0 6px 14px ${theme.palette.secondary.main}aa`,
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: theme.palette.secondary.dark || '#2979ff',
              boxShadow: `0 10px 25px ${theme.palette.secondary.main}dd`,
              transform: 'scale(1.08)',
            },
          }}
        >
          לצפייה בתפריט
        </Button>
      </Paper>
    </Box>
  );
}
