
import ProductCard from "../../../../components/ProductCard";
import * as categoryService from '../../../../services/category-service';

export default function CategoryBody() {
  return (
    <section>
      <div>
        {
          categoryService.findAll().map(prod => (
            <ProductCard key={prod.id} category={prod} />
          ))
        }

      </div>
    </section>
  );
}