


import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  IconButton,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from '../redux/cartSlice';
import { Link } from 'react-router-dom';
export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart); // סל הקניות מה-Redux
  const dispatch = useDispatch();

  // חישוב סכום כולל
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // שינוי כמות למוצר
  const handleQuantityChange = (id, value) => {
    const quantity = Math.max(1, parseInt(value) || 1); // לא לאפשר ערך מתחת ל-1
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handlePayment = () => {
    alert('התשלום בוצע בהצלחה!');
    dispatch(clearCart());
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Paper sx={{ p: 4, width: 500 }}>
              <Button  color="primary" component={Link} to="/menu">חזרה לתפריט</Button>
        
        <Typography variant="h5" mb={3}>
          סל הקניות
        </Typography>

        {cart.length === 0 ? (
          <Typography>העגלה ריקה</Typography>
        ) : (
          cart.map((item) => (
            <Box key={item.id} mb={3}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">{item.name}</Typography>
                <IconButton onClick={() => handleRemove(item.id)} color="error">
                  הסר מהעגלה
                </IconButton>
              </Box>

              <Typography>מחיר ליחידה: {item.price} ₪</Typography>

              <TextField
                type="number"
                label="כמות"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                inputProps={{ min: 1 }}
                fullWidth
                sx={{ my: 1 }}
              />

              <Typography>
                סה"כ לפריט: {item.price * item.quantity} ₪
              </Typography>

              <Divider sx={{ my: 2 }} />
            </Box>
          ))
        )}

        {cart.length > 0 && (
          <>
            <Typography variant="h6">סה"כ לתשלום: {totalPrice} ₪</Typography>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h5" mb={2}>
              פרטי תשלום
            </Typography>
         
            <form onSubmit={handlePayment}>
            <div style={{ marginBottom: 12 }}>
              <label>
                מספר כרטיס:
                <input
                  type="text"
                  maxLength={16}
                  required
                  placeholder="16 ספרות"
                  style={{
                    width: "100%",
                    padding: 8,
                    boxSizing: "border-box",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                    fontSize: 16,
                    marginTop: 6,
                  }}
                />
              </label>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label>
                תוקף (MM/YY):
                <input
                  type="text"
                  required
                  placeholder="MM/YY"
                  style={{
                    width: "100%",
                    padding: 8,
                    boxSizing: "border-box",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                    fontSize: 16,
                    marginTop: 6,
                  }}
                />
              </label>
            </div>

            <div style={{ marginBottom: 12 }}>
              <label>
                CVV:
                <input
                  type="text"
                  required
                
                  placeholder="3 ספרות מאחור"
                  style={{
                    width: "100%",
                    padding: 8,
                    boxSizing: "border-box",
                    borderRadius: 4,
                    border: "1px solid #ccc",
                    fontSize: 16,
                    marginTop: 6,
                  }}
                />
              </label>
            </div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ padding: "10px 20px", fontSize: 16 }}
              fullWidth
            >
              אשר תשלום
            </Button>
          </form>
          </>
        )}
      </Paper>
      
    </Box>
  );
}
