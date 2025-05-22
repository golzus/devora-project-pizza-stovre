


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
import { removeFromCart, updateQuantity } from '../redux/cartSlice'; // ייבוא הפעולות
import { useNavigate, Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart); // שליפת סל הקניות מה-Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // חישוב סכום כולל
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // טיפול בשינוי כמות
  const handleQuantityChange = (id, value) => {
    const quantity = Math.max(1, parseInt(value) || 1);
    dispatch(updateQuantity({ id, quantity }));
  };

  // טיפול בהסרת מוצר מהעגלה
  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 4 }}>
        <Button color="primary" component={Link} to="/menu">
          חזרה לתפריט
        </Button>

        <Typography variant="h4" mb={3} color="primary" textAlign="center">
          🛒 סל הקניות שלך
        </Typography>

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
                  alignItems="flex-start"
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      color="error"
                      onClick={() => handleRemove(item.id)}
                    >
                      הסר מהעגלה
                      {/* <DeleteIcon /> */}
                    </IconButton>
                  }
                >
                  <Box sx={{ width: '100%' }}>
                    <Typography variant="h6" color="secondary">
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
                      sx={{ mt: 1, width: 100 }}
                    />

                    <Typography variant="body1" sx={{ mt: 1 }}>
                      סה"כ לפריט: {item.price * item.quantity} ₪
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" textAlign="center" color="primary" fontWeight="bold">
              סה״כ לתשלום: {total} ₪
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              sx={{
                mt: 3,
                borderRadius: 3,
                fontWeight: 'bold',
                boxShadow: '0 4px 20px rgba(255, 64, 129, 0.4)',
                transition: '0.3s',
                '&:hover': {
                  backgroundColor: '#ff79a8',
                },
              }}
              onClick={() => navigate('/checkout')}
            >
              מעבר לתשלום
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
}
