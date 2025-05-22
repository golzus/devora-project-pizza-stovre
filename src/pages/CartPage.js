import {
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  TextField,
  Divider,
  Paper,
  Button,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { useNavigate, Link } from 'react-router-dom';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id, value) => {
    const quantity = Math.max(1, parseInt(value) || 1);
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box sx={{ p: 4, maxWidth: 700, mx: 'auto', mt: 6 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 6, bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" color="primary" fontWeight="bold" textAlign="center" flexGrow={1}>
            🛒 סל הקניות שלך
          </Typography>
          <Button color="primary" component={Link} to="/menu" sx={{ fontWeight: 'bold' }}>
            חזרה לתפריט
          </Button>
        </Box>

        {cartItems.length === 0 ? (
          <Typography variant="body1" align="center" color="text.secondary">
            הסל ריק. הוסף מוצרים כדי להתחיל בקנייה.
          </Typography>
        ) : (
          <>
            <List>
              {cartItems.map((item) => (
                <ListItem
                  key={item.id}
                  sx={{
                    mb: 2,
                    px: 3,
                    py: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                    bgcolor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 1.5,
                  }}
                >
                  <Typography variant="h6" color="secondary" fontWeight="bold">
                    {item.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    מחיר ליחידה: {item.price} ₪
                  </Typography>

                  <TextField
                    type="number"
                    label="כמות"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    inputProps={{ min: 1 }}
                    size="small"
                    sx={{ width: 100 }}
                  />

                  <Typography variant="body1" color="text.primary">
                    סה"כ לפריט: {item.price * item.quantity} ₪
                  </Typography>

                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemove(item.id)}
                    sx={{ alignSelf: 'flex-end', mt: 1 }}
                  >
                    הסר מהעגלה
                  </Button>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 4 }} />

            <Typography
              variant="h5"
              textAlign="center"
              color="primary"
              fontWeight="bold"
              sx={{ mb: 2 }}
            >
              סה״כ לתשלום: {total} ₪
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              onClick={() => navigate('/checkout')}
              sx={{
                py: 1.5,
                borderRadius: 3,
                fontWeight: 'bold',
                fontSize: '1.1rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              }}
            >
              מעבר לתשלום
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
}
