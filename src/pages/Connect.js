import React from 'react';
import { Box, Typography, Paper, Container, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Connect = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          p: 4,
          mt: 6,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 3,
          boxShadow: `0 0 15px ${theme.palette.primary.main}55`,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: theme.palette.primary.main, fontWeight: 'bold' }}
        >
          צור קשר
        </Typography>

        <Divider sx={{ mb: 3, bgcolor: theme.palette.primary.main }} />

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
            טלפון:
          </Typography>
          <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
            03-1234567
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
  <Typography variant="h6" sx={{ color: theme.palette.secondary.main }}>
    מייל:
  </Typography>
  <Typography variant="body1">
    <a
      href="mailto:info@pizzastore.co.il"
      style={{
        color: theme.palette.text.primary,
        textDecoration: 'none',
      }}
    >
      info@pizzastore.co.il
    </a>
  </Typography>
</Box>

        <Divider sx={{ my: 3, bgcolor: theme.palette.secondary.main }} />

        <Typography variant="body2" align="center" sx={{ color: theme.palette.text.secondary }}>
          זמינים עבורכם בימים א' עד ה' בין השעות 10:00–22:00<br />
          נשמח לשמוע מכם ולהציע את הפיצה הכי טעימה בעיר 🍕
        </Typography>
      </Paper>
    </Container>
  );
};

export default Connect;
