import CartItems from "./CartItems";
const ShoppingCart = () => {
  const cart: number = 2;
  return (
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
        <CartItems />
      )}
    </div>
  );
};

export default ShoppingCart;
