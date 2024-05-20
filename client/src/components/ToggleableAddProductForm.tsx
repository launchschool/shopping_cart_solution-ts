import { useState } from "react";
import AddProductForm from "./AddProductForm";

const ToggleableAddProductForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleToggleForm = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      {isVisible ? (
        <AddProductForm onToggleForm={handleToggleForm} />
      ) : (
        <p>
          <button className="add-product-button" onClick={handleToggleForm}>
            Add A Product
          </button>
        </p>
      )}
    </>
  );
};

export default ToggleableAddProductForm;
