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
    description: 'Rich and bold shot of pure coffee. A small but very strong coffee made by forcing hot water through finely-ground coffee beans under high pressure. It’s the base for many other coffee drinks.',
    img: [espresso],
    type: 'hot',
    base: 'espresso',
    price: '3.25',
    size: [{ id: 's-001-s', size: 'S' }, { id: 's-001-m', size: 'M' }],
    components: ['coffe'],
    rating: 4.7,
    voutes: 635
  },
  {
    id: '002',
    title: 'Americano',
    description: 'Espresso topped with hot water. Espresso diluted with hot water, resulting in a milder taste and larger cup compared to straight espresso. Similar strength to drip coffee but with espresso’s aroma.',
    img: [americano],
    type: 'hot',
    base: 'espresso',
    price: '3.53',
    size: [{ id: 's-002-s', size: 'S' }, { id: 's-002-m', size: 'M' }, { id: 's-002-l', size: 'L' }],
    components: ['coffe', 'water'],
    rating: 5,
    voutes: 115
  },
  {
    id: '003',
    title: 'Cappuccino',
    description: 'Espresso with steamed milk and thick milk foam. Made with equal parts espresso, steamed milk, and milk foam. It has a rich coffee flavor balanced with creamy texture and a thick, airy foam on top.',
    img: [cappuccino],
    type: 'hot',
    base: 'deep foam',
    price: '4.50',
    size: [{ id: 's-003-s', size: 'S' }, { id: 's-003-m', size: 'M' }],
    components: ['coffe', 'milk'],
    rating: 4.9,
    voutes: 35
  },
  {
    id: '004',
    title: 'Latte',
    description: 'Espresso with steamed milk, light foam on top. Espresso with a larger amount of steamed milk and just a thin layer of milk foam. It’s smooth, creamy, and less intense than cappuccino.',
    img: [latte],
    type: 'hot',
    base: 'microfoam',
    price: '4.53',
    size: [{ id: 's-004-m', size: 'M' }, { id: 's-004-l', size: 'L' }],
    components: ['coffe', 'water', 'milk'],
    rating: 4.5,
    voutes: 53
  },
  {
    id: '005',
    title: 'Iced Latte',
    description: 'Espresso poured over ice with chilled milk. A chilled version of latte: espresso poured over cold milk and ice. Refreshing, smooth, and great for warm days.',
    img: [icelatte],
    type: 'cold',
    base: 'microfoam',
    price: '4.25',
    size: [{ id: 's-005-m', size: 'M' }, { id: 's-005-l', size: 'L' }],
    components: ['coffe', 'water', 'milk', 'ice'],
    rating: 0,
    voutes: 0
  },
  {
    id: '006',
    title: 'Bumble Coffee',
    description: 'A refreshing iced espresso drink made with honey and orange juice, poured over ice. A trendy drink made by layering espresso over sparkling orange juice with honey (sometimes other citrus or syrups are added). Sweet, citrusy, and energizing with a unique taste contrast between coffee bitterness and fresh juice.',
    img: [bumble],
    type: 'cold',
    base: 'microfoam',
    price: '4.5',
    size: [{ id: 's-006-m', size: 'M' }, { id: 's-006-l', size: 'L' }],
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

