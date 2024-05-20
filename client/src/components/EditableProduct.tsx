import { useState } from "react";
import { BaseProduct, Product } from "../types";
import EditProductForm from "./EditProductForm";
import ProductDetails from "./ProductDetails";

interface EditableProductProps {
  product: Product;
  onUpdateProduct: (
    updatedProduct: BaseProduct,
    productId: string,
    onToggleEdit: () => void
  ) => void;
  onDeleteProduct: (productId: string) => void;
}

const EditableProduct = ({
  product,
  onUpdateProduct,
  onDeleteProduct,
}: EditableProductProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li className="product">
      <ProductDetails
        {...product}
        onToggleEdit={handleToggleEdit}
        onDeleteProduct={onDeleteProduct}
      />
      {isEditing ? (
        <EditProductForm
          {...product}
          onToggleEdit={handleToggleEdit}
          onUpdateProduct={onUpdateProduct}
        />
      ) : null}
    </li>
  );
};

export default EditableProduct;
