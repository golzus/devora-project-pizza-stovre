import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Grid, CircularProgress, Typography, Box } from '@mui/material';

export default function Menu() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/products.json')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress sx={{ mt: 10, mx: 'auto', display: 'block' }} />;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" textAlign="center" mb={3} color="primary">התפריט שלנו</Typography>
      <Grid container spacing={2} height={'80vh'} overflow={"auto"} justifyContent="center">
        {products.map(prod => (
          <Grid item sx={12} sm={6} md={4} key={prod.id}>
            <ProductCard product={prod} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}