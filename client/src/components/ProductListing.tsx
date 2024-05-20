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
      </ul>
    </div>
  );
};

export default ProductListing;
