import { Link } from 'react-router-dom';
import { CategoryDTO } from '../../models/category';
import './styles.css';

type Props = {
  category: CategoryDTO;
}

export default function CategoryMenu({ category }: Props) {
  return (
    <Link to={`/${category.name}/${category.id}`}>
      <div className='category-menu'>
        {category.name}
      </div>
    </Link>
  );
}