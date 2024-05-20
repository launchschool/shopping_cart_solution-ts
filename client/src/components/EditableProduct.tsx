import { useState } from "react";

const EditableProduct = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li className="product">
      <div className="product-details">
        <h3>Amazon Kindle E-reader</h3>
        <p className="price">$79.99</p>
        <p className="quantity">5 left in stock</p>
        <div className="actions product-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="edit">Edit</button>
        </div>
        <button className="delete-button">
          <span>X</span>
        </button>
      </div>
      {isEditing ? (
        <div className="edit-form">
          <h3>Edit Product</h3>
          <form>
            <div className="input-group">
              <label htmlFor="product-name">Product Name</label>
              <input
                type="text"
                id="product-name"
                value="Apple 10.5-Inch iPad Pro"
                aria-label="Product Name"
              />
            </div>

            <div className="input-group">
              <label htmlFor="product-price">Price</label>
              <input
                type="number"
                id="product-price"
                value="649.99"
                aria-label="Product Price"
              />
            </div>

            <div className="input-group">
              <label htmlFor="product-quantity">Quantity</label>
              <input
                type="number"
                id="product-quantity"
                value="2"
                aria-label="Product Quantity"
              />
            </div>

            <div className="actions form-actions">
              <button type="submit">Update</button>
              <button type="button">Cancel</button>
            </div>
          </form>
        </div>
      ) : null}
    </li>
  );
};

export default EditableProduct;
