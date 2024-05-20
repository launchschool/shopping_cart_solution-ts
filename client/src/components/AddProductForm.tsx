import { useState } from "react";
import { BaseProduct } from "../types";

interface AddProductFormProps {
  onToggleForm: () => void;
  onAddProduct: (product: BaseProduct, onToggleForm: () => void) => void;
}

const AddProductForm = ({
  onToggleForm,
  onAddProduct,
}: AddProductFormProps) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newProduct = {
      title,
      price,
      quantity,
    };
    onAddProduct(newProduct, onToggleForm);
  };

  return (
    <div className="add-form">
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
            required
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
            required
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
          />
        </div>
        <div className="actions form-actions">
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
          <button type="button" onClick={onToggleForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
