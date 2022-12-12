import { ProductDTO } from './../models/product';
import { CategoryDTO } from './../models/category';

export function findAll(): CategoryDTO[] {
  return categories;
}

export function findById(id: number) : CategoryDTO | undefined {
  return categories.find(x => x.id === id);
}

export function productByCategory(id: number): ProductDTO[] {
  return findAll().filter(x => findById(x.id))
}



let categories: CategoryDTO[] = [
  {
    "id": 1,
    "name": "Computadores",
    "products": [
      {
        "id": 1,
        "name": "MacBook i5"
      },
      {
        "id": 2,
        "name": "Notebook IdeaPad 3i"
      },
      {
        "id": 3,
        "name": "Samsung BookIntel® Core™ i3"
      }
    ]
  },
 
  {
    "id": 2,
    "name": "Eletrônicos",
    "products": [
      {
        "id": 1,
        "name": "Smartwatch 1.69"
      },
      {
        "id": 2,
        "name": "Caneta Pencil Para Apple iPad Palm"
      },
      {
        "id": 3,
        "name": "Estabilizador gimbal DJI OM 4 SE"
      }
    ]
  },

  {
    "id": 3,
    "name": "Livros",
    "products": [
      {
        "id": 1,
        "name": "Código limpo: Habilidades práticas do Agile Software"
      },
      {
        "id": 2,
        "name": "Padrões de Projetos: Soluções Reutilizáveis de Software Orientados a Objetos"
      },
      {
        "id": 3,
        "name": "Desbravando SOLID"
      }
    ]
  }
]