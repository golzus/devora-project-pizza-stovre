
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

import axios from 'axios';
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Paper,
  CircularProgress,
  TextField,
} from '@mui/material';

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [buttonText, setButtonText] = useState(
    quantity > 1 ? `הוסף ${quantity} יחידות` : 'הוסף לסל'
  );

  useEffect(() => {
    setButtonText(quantity > 1 ? `הוסף ${quantity} יחידות` : 'הוסף לסל');
  }, [quantity]);

  useEffect(() => {
    axios
      .get('/products.json')
      .then((res) => {
        const found = res.data.find((p) => p.id.toString() === id);
        setProduct(found);
      })
      .catch((err) => {
        console.error('שגיאה בטעינת הנתונים:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (!product) {
    return (
      <Typography mt={5} align="center">
        המוצר לא נמצא
      </Typography>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    setButtonText('המוצר נוסף לעגלה ✅');

    setTimeout(() => {
      navigate('/menu');
    }, 1000);
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Paper sx={{ p: 3, maxWidth: 600 }}>
        <Button color="primary" component={Link} to="/menu">
          חזרה לתפריט
        </Button>

        <CardMedia
          component="img"
          height="300"
          image={`/${product.image}`}
          alt={product.name}
        />

        <Typography variant="h4" mt={2}>
          {product.name}
        </Typography>
        <Typography variant="body1" mt={1}>
          {product.description}
        </Typography>
        <Typography variant="h6" mt={2}>
          {product.price} ₪ ליחידה
        </Typography>

        <TextField
          type="number"
          label="כמות"
          value={quantity}
          onChange={(e) => {
            const val = Math.max(1, parseInt(e.target.value) || 1);
            setQuantity(val);
          }}
          fullWidth
          margin="normal"
        />

        <Button variant="contained" color="primary" fullWidth onClick={handleAddToCart}>
          {buttonText}
        </Button>
      </Paper>
    </Box>
  );
}
