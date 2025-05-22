import React from 'react';
import { Box, Typography, Paper, Container, Divider, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Connect = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper
        elevation={12}
        sx={{
          p: 6,
          borderRadius: 5,
          bgcolor: theme.palette.background.paper,
          boxShadow: `0 12px 32px ${theme.palette.primary.main}40`,
          border: `2px solid ${theme.palette.primary.main}`,
          textAlign: 'center',
          userSelect: 'none',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 900,
            letterSpacing: 2,
            mb: 3,
            textTransform: 'uppercase',
            textShadow: `1px 1px 3px ${theme.palette.primary.dark}88`,
          }}
        >
          צור קשר
        </Typography>

        <Divider
          sx={{
            mx: 'auto',
            mb: 5,
            width: 100,
            height: 4,
            borderRadius: 2,
            bgcolor: theme.palette.primary.main,
            boxShadow: `0 0 10px ${theme.palette.primary.main}aa`,
          }}
        />

        <Box sx={{ mb: 5 }}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: 'bold',
              letterSpacing: 1,
              mb: 1,
              textShadow: `0 0 4px ${theme.palette.secondary.dark}bb`,
            }}
          >
            טלפון
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.primary,
              fontWeight: 700,
              letterSpacing: 0.7,
              userSelect: 'text',
            }}
          >
            03-1234567
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: 'bold',
              letterSpacing: 1,
              mb: 1,
              textShadow: `0 0 4px ${theme.palette.secondary.dark}bb`,
            }}
          >
            מייל
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              letterSpacing: 0.7,
              userSelect: 'text',
            }}
          >
            <Link
              href="mailto:info@pizzastore.co.il"
              underline="none"
              sx={{
                color: theme.palette.text.primary,
                transition: 'color 0.4s ease',
                '&:hover': {
                  color: theme.palette.primary.main,
                  textDecoration: 'underline',
                },
              }}
            >
              info@pizzastore.co.il
            </Link>
          </Typography>
        </Box>

        <Divider sx={{ mb: 4, bgcolor: theme.palette.secondary.main, opacity: 0.15 }} />

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            fontStyle: 'italic',
            fontWeight: 500,
            letterSpacing: 0.5,
            lineHeight: 1.7,
            maxWidth: 380,
            mx: 'auto',
          }}
        >
          זמינים עבורכם בימים א' עד ה' בין השעות 10:00–22:00
          <br />
          נשמח לשמוע מכם ולהציע את הפיצה הכי טעימה בעיר 🍕
        </Typography>
      </Paper>
    </Container>
  );
};

export default Connect;
