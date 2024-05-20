import CartItem from "./CartItem";
import { CartItem as CartItemType } from "../types";

interface CartItemProps {
  cartItems: CartItemType[];
}

const CartItems = ({ cartItems }: CartItemProps) => {
  return (
    <table className="cart-items">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem._id} {...cartItem} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3} className="total">
            Total: $729.98
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartItems;
