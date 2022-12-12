import { CategoryDTO } from "../../models/category";
import CategoryProduct from "../CategoryProduct";

type Props = {
  category: CategoryDTO;
}

export default function ProductCard({ category }: Props) {
  return (
    <div className="product-card">
      {
        category.products.map(prod => (
          <CategoryProduct key={prod.id} product={prod.name} />
        ))
      }
    </div>

  );
}