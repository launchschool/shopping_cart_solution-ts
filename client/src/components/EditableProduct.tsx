import { useState } from "react";
import { Product } from "../types";
import EditProductForm from "./EditProductForm";
import ProductDetails from "./ProductDetails";

interface EditableProductProps {
  product: Product;
}

const EditableProduct = ({ product }: EditableProductProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li className="product">
      <ProductDetails {...product} onToggleEdit={handleToggleEdit} />
      {isEditing ? (
        <EditProductForm {...product} onToggleEdit={handleToggleEdit} />
      ) : null}
    </li>
  );
};

export default EditableProduct;
