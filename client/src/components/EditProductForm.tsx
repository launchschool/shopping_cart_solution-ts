import { useState } from "react";
import { BaseProduct, Product } from "../types";

interface EditProductFormProps extends Product {
  onToggleEdit: () => void;
  onUpdateProduct: (
    updatedProduct: BaseProduct,
    productId: string,
    onToggleEdit: () => void
  ) => void;
}

const EditProductForm = ({
  _id,
  title: propTitle,
  price: propPrice,
  quantity: propQuantity,
  onToggleEdit,
  onUpdateProduct,
}: EditProductFormProps) => {
  const [title, setTitle] = useState(propTitle || "");
  const [price, setPrice] = useState(propPrice || 0);
  const [quantity, setQuantity] = useState(propQuantity || 0);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const updatedProduct = {
      title,
      price,
      quantity,
    };

    onUpdateProduct(updatedProduct, _id, onToggleEdit);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-label="Product Name"
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={price}
            aria-label="Product Price"
            onChange={(e) => setPrice(+e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={quantity}
            aria-label="Product Quantity"
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit" onClick={handleSubmit}>
            Update
          </button>
          <button type="button" onClick={onToggleEdit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
