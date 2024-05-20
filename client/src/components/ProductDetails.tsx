import { Product } from "../types";

interface ProductDetailsProps extends Product {
  onToggleEdit: () => void;
  onDeleteProduct: (productId: string) => void;
}

const ProductDetails = ({
  _id,
  title,
  price,
  quantity,
  onToggleEdit,
  onDeleteProduct,
}: ProductDetailsProps) => {
  const handleDelete = () => {
    onDeleteProduct(_id);
  };
  return (
    <div className="product-details">
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <button className="add-to-cart">Add to Cart</button>
        <button className="edit" onClick={onToggleEdit}>
          Edit
        </button>
      </div>
      <button className="delete-button" onClick={handleDelete}>
        <span>X</span>
      </button>
    </div>
  );
};

export default ProductDetails;
