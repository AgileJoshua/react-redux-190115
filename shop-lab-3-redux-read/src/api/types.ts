export type MenuItem={name:string}

export type ProductItem = {
    name: string,
    price: number,
    category?: ProductCategory[]
}

export type ProductCategory = {
    name: string,
    description: string
}