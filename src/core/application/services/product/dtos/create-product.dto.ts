import { ProductCategoryValue } from "src/core/domain/value-objects/product-category";

export class CreateProductDto {
  name: string;
  price: number;
  description: string;
  category: ProductCategoryValue;
}