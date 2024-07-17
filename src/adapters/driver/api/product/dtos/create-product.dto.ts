export type ProductCategory = 'beverage' | 'side-dish';

export class CreateProductDto {
  name: string;
  price: number;
  description: string;
  category: ProductCategory;
}