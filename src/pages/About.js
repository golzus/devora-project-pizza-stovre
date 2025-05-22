import React from 'react';
import { Box, Typography, Paper, Container, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const About = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Paper
        elevation={8}
        sx={{
          p: { xs: 3, md: 6 },
          backgroundColor: theme.palette.background.paper,
          borderRadius: 4,
          boxShadow: `0 0 20px ${theme.palette.primary.main}77`,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            letterSpacing: 2,
            mb: 3,
            textTransform: 'uppercase',
          }}
        >
          אודות האתר
        </Typography>

        <Divider sx={{ bgcolor: theme.palette.secondary.main, mb: 4, height: 3, width: 80, mx: 'auto', borderRadius: 2 }} />

        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.primary,
            lineHeight: 1.9,
            fontSize: { xs: '1rem', md: '1.15rem' },
            textAlign: 'justify',
            maxWidth: '900px',
            mx: 'auto',
          }}
        >
          ברוכים הבאים לחנות הפיצה שלנו! אנו מתמחים בהכנת פיצות טריות עם מבחר עשיר של תוספות, בצק בעבודת יד,
          ורוטב סודי שאי אפשר לעמוד בפניו. בנוסף לפיצות, אנו מציעים מגוון רחב של פסטות טריות,
          סלטים מרעננים, וקינוחים טעימים. אנו מאמינים בשירות מעולה, טריות מקסימלית, וחווית לקוח בלתי נשכחת. בתיאבון!
        </Typography>

        <Box
          sx={{
            mt: 5,
            p: 2,
            backgroundColor: theme.palette.primary.main + '22',
            borderRadius: 2,
            textAlign: 'center',
            fontStyle: 'italic',
            color: theme.palette.primary.main,
            fontWeight: 500,
            fontSize: { xs: '0.9rem', md: '1rem' },
            maxWidth: '700px',
            mx: 'auto',
          }}
        >
          "הפיצה הטעימה ביותר בעיר, עם לב פתוח ואהבה אמיתית לאוכל."
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
