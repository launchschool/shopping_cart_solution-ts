import { CartItem } from "../types";
import CartItems from "./CartItems";

interface ShoppingCartProps {
  cartItems: CartItem[];
}

const ShoppingCart = ({ cartItems }: ShoppingCartProps) => {
  const cart: number = 2;
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart === 0 ? (
          <div className="cart">
            <h2>Your Cart</h2>
            <p>Your cart is empty</p>
            <p>Total: $0</p>
            <button className="checkout" disabled>
              Checkout
            </button>
          </div>
        ) : (
          <CartItems cartItems={cartItems} />
        )}
      </div>
    </header>
  );
};

export default ShoppingCart;
