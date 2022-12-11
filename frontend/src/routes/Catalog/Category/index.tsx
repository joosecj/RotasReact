import CategoryMenu from '../../../components/CategoryMenu';
import * as categoryService from '../../../services/category-service';
import './styles.css';

export default function Category() {
  return (
    <main>
      <section className="container">
        <div className='container-category-menu'>
          {
            categoryService.findAll().map(
              category => <CategoryMenu key={category.id} category={category} />
            )
          }
        </div>
      </section>
    </main>
  );
}