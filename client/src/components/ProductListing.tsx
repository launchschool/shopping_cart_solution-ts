import { Product } from "../types";
import EditableProduct from "./EditableProduct";

interface ProductListingProps {
  products: Product[];
}

const ProductListing = ({ products }: ProductListingProps) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-list">
        {products.map((product) => (
          <EditableProduct key={product._id} product={product} />
        ))}

        <li className="product">
          <div className="product-details">
            <h3>Apple 10.5-Inch iPad Pro</h3>
            <p className="price">$649.99</p>
            <p className="quantity">2 left in stock</p>
            <div className="actions product-actions">
              <button className="add-to-cart">Add to Cart</button>
              <button className="edit">Edit</button>
            </div>
            <button className="delete-button">
              <span>X</span>
            </button>
          </div>
        </li>

        <li className="product">
          <div className="product-details">
            <h3>Yamaha Portable Keyboard</h3>
            <p className="price">$155.99</p>
            <p className="quantity">0 left in stock</p>
            <div className="actions product-actions">
              <button className="add-to-cart" disabled>
                Add to Cart
              </button>
              <button className="edit">Edit</button>
            </div>
            <button className="delete-button">
              <span>X</span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductListing;
