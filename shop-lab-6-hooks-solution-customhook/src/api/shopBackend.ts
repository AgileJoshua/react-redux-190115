
import * as types from './types'

const fruitCategory: types.ProductCategory = { name: 'Fruit', description: 'Yummy fruit' }

const vegCategory: types.ProductCategory = { name: 'Veggies', description: 'Yummy vegs' }

const ProductCatalogue: types.ProductItem[] = [
    { name: 'Tomato', price: 123, category: [vegCategory, fruitCategory] },
    { name: 'Banana', price: 45, category: [fruitCategory] },
    { name: 'Carrot', price: 45, category: [vegCategory] }
]

export function LoadMoreProducts() {
    const p = new Promise<types.ProductItem[]>((resolve) => {
        setTimeout(() => {
            resolve(ProductCatalogue);
        }, 1500);
    })
    return p;
};

export const Categories = [fruitCategory, vegCategory];