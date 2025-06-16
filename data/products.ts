export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
}

export const products: Product[] = [
  // COMBO PROMOCIONAL
  {
    id: 'combo-promo-1',
    name: 'Combo Promocional',
    description: '20 peças: Hot roll, sashimi, niguiri e uramaki',
    price: 45.00,
    category: 'Combos'
  },

  // HOT ROLLS
  {
    id: 'hot-filadélfia',
    name: 'Hot Filadélfia',
    description: 'Salmão, cream cheese, empanado e frito',
    price: 18.00,
    category: 'Hot Rolls',
  },
  {
    id: 'hot-skin',
    name: 'Hot Skin',
    description: 'Salmão skin, cream cheese, empanado',
    price: 18.00,
    category: 'Hot Rolls',
  },
  {
    id: 'hot-ebi',
    name: 'Hot Ebi',
    description: 'Camarão empanado, cream cheese',
    price: 18.00,
    category: 'Hot Rolls',
  },
  {
    id: 'hot-especial',
    name: 'Hot Especial',
    description: 'Salmão, kani, cream cheese, empanado',
    price: 20.00,
    category: 'Hot Rolls',
  },

  // URAMAKIS
  {
    id: 'uramaki-filadélfia',
    name: 'Uramaki Filadélfia',
    description: 'Salmão, cream cheese, gergelim',
    price: 16.00,
    category: 'Uramakis',
  },
  {
    id: 'uramaki-salmão',
    name: 'Uramaki Salmão',
    description: 'Salmão fresco, arroz temperado',
    price: 16.00,
    category: 'Uramakis',
  },
  {
    id: 'uramaki-skin',
    name: 'Uramaki Skin',
    description: 'Salmão skin grelhado, pepino',
    price: 16.00,
    category: 'Uramakis',
  },
  {
    id: 'uramaki-kani',
    name: 'Uramaki Kani',
    description: 'Kani, pepino, maionese',
    price: 16.00,
    category: 'Uramakis',
  },
  {
    id: 'uramaki-atum',
    name: 'Uramaki Atum',
    description: 'Atum fresco, cebolinha',
    price: 18.00,
    category: 'Uramakis',
  },
  {
    id: 'uramaki-especial',
    name: 'Uramaki Especial',
    description: 'Salmão, kani, cream cheese',
    price: 18.00,
    category: 'Uramakis',
  },

  // TEMAKIS
  {
    id: 'temaki-salmão',
    name: 'Temaki Salmão',
    description: 'Salmão fresco, arroz, alga',
    price: 12.00,
    category: 'Temakis',
  },
  {
    id: 'temaki-atum',
    name: 'Temaki Atum',
    description: 'Atum fresco, cebolinha',
    price: 14.00,
    category: 'Temakis',
  },
  {
    id: 'temaki-skin',
    name: 'Temaki Skin',
    description: 'Salmão skin, pepino',
    price: 12.00,
    category: 'Temakis',
  },
  {
    id: 'temaki-kani',
    name: 'Temaki Kani',
    description: 'Kani, pepino, maionese',
    price: 12.00,
    category: 'Temakis',
  },
  {
    id: 'temaki-ebi',
    name: 'Temaki Ebi',
    description: 'Camarão, maionese',
    price: 14.00,
    category: 'Temakis',
  },
  {
    id: 'temaki-especial',
    name: 'Temaki Especial',
    description: 'Salmão, cream cheese, cebolinha',
    price: 14.00,
    category: 'Temakis',
  },

  // SASHIMIS
  {
    id: 'sashimi-salmão',
    name: 'Sashimi Salmão',
    description: '5 fatias de salmão fresco',
    price: 20.00,
    category: 'Sashimis',
  },
  {
    id: 'sashimi-atum',
    name: 'Sashimi Atum',
    description: '5 fatias de atum fresco',
    price: 25.00,
    category: 'Sashimis',
  },
  {
    id: 'sashimi-misto',
    name: 'Sashimi Misto',
    description: '8 fatias: salmão e atum',
    price: 35.00,
    category: 'Sashimis',
  },

  // NIGUIRIS
  {
    id: 'niguiri-salmão',
    name: 'Niguiri Salmão',
    description: '2 peças de salmão sobre arroz',
    price: 8.00,
    category: 'Niguiris',
  },
  {
    id: 'niguiri-atum',
    name: 'Niguiri Atum',
    description: '2 peças de atum sobre arroz',
    price: 10.00,
    category: 'Niguiris',
  },
  {
    id: 'niguiri-ebi',
    name: 'Niguiri Ebi',
    description: '2 peças de camarão sobre arroz',
    price: 10.00,
    category: 'Niguiris',
  },

  // JOE
  {
    id: 'joe-salmão',
    name: 'Joe Salmão',
    description: 'Salmão envolvido em arroz e alga',
    price: 6.00,
    category: 'Joe',
  },
  {
    id: 'joe-atum',
    name: 'Joe Atum',
    description: 'Atum envolvido em arroz e alga',
    price: 8.00,
    category: 'Joe',
  },
  {
    id: 'joe-kani',
    name: 'Joe Kani',
    description: 'Kani envolvido em arroz e alga',
    price: 6.00,
    category: 'Joe',
  },
  {
    id: 'joe-pepino',
    name: 'Joe Pepino',
    description: 'Pepino fresco envolvido em alga',
    price: 5.00,
    category: 'Joe',
  },

  // ESPECIAIS
  {
    id: 'especial-supreme',
    name: 'Especial Supreme',
    description: 'Salmão, atum, cream cheese, cobertura especial',
    price: 25.00,
    category: 'Especiais',
  },
  {
    id: 'especial-dragon',
    name: 'Dragon Roll',
    description: 'Camarão tempura, abacate, molho especial',
    price: 28.00,
    category: 'Especiais',
  }
]

export const categories = [
  'Combos',
  'Hot Rolls', 
  'Uramakis',
  'Temakis',
  'Sashimis',
  'Niguiris',
  'Joe',
  'Especiais'
]