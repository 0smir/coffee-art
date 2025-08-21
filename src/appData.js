import americano from '@/assets/images/products/americano.jpg';
import bumble from '@/assets/images/products/bumble.jpg';
import cappuccino from '@/assets/images/products/cappuccino.jpg';
import espresso from '@/assets/images/products/espresso.jpg';
import latte from '@/assets/images/products/latte.jpg';
import icelatte from '@/assets/images/products/icelatte.jpg';

export const MENU = [
  {
    id: '001',
    title: 'Espresso ',
    description: 'Rich and bold shot of pure coffee',
    img: [espresso],
    type: 'hot',
    base: 'espresso',
    price: '3.25',
    size: ['S', 'M'],
    components: ['coffe'],
    rating: 4.7,
    voutes: 635
  },
  {
    id: '002',
    title: 'Americano',
    description: 'Espresso topped with hot water',
    img: [americano],
    type: 'hot',
    base: 'espresso',
    price: '3.53',
    size: ['S', 'M', 'L'],
    components: ['coffe', 'water'],
    rating: 5,
    voutes: 115
  },
  {
    id: '003',
    title: 'Cappuccino',
    description: 'Espresso with steamed milk and thick milk foam',
    img: [cappuccino],
    type: 'hot',
    base: 'deep foam',
    price: '4.50',
    size: ['S', 'M'],
    components: ['coffe', 'milk'],
    rating: 4.9,
    voutes: 35
  },
  {
    id: '004',
    title: 'Latte',
    description: 'Espresso with steamed milk, light foam on top',
    img: [latte],
    type: 'hot',
    base: 'microfoam',
    price: '4.53',
    size: ['M', 'L'],
    components: ['coffe', 'water', 'milk'],
    rating: 4.5,
    voutes: 53
  },
  {
    id: '005',
    title: 'Iced Latte',
    description: 'Espresso poured over ice with chilled milk',
    img: [icelatte],
    type: 'cold',
    base: 'microfoam',
    price: '4.25',
    size: ['M', 'L'],
    components: ['coffe', 'water', 'milk', 'ice'],
    rating: 0,
    voutes: 0
  },
  {
    id: '006',
    title: 'Bumble Coffee',
    description: 'A refreshing iced espresso drink made with honey and orange juice, poured over ice',
    img: [bumble],
    type: 'cold',
    base: 'microfoam',
    price: '4.5',
    size: ['M', 'L'],
    components: ['coffe', 'honey', 'orange juice', 'ice'],
    rating: 4.9,
    voutes: 150
  }
  // {
  //   id: '',
  //   title: '',
  //   description: '',
  //   img: ['', ''],
  //   type: '',
  //   base: 'espresso'/ 'deep foam'/ 'microfoam',
  //   price: '',
  //   size: ['S', 'M', 'L'],
  //   components: ['coffe', 'water'],
  //   rating: 4.5
  // }
]

