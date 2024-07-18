import { PersistedEntity } from "./persisted-entity";
import { ProductCategory, ProductCategoryValue } from "./value-objects/product-category";

class _Product<T extends PersistedEntity | null> {
  id: T["id"];
  createdAt: T["createdAt"];
  updatedAt: T["updatedAt"];
  name: string;
  price: number;
  description: string;
  category: ProductCategory;

  constructor(product: { name: string; price: number; description: string; category: ProductCategoryValue }) {
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
    this.category = new ProductCategory(product.category);
  }

  update(product: { name: string; price: number; description: string; category: ProductCategoryValue }) {
    this.name = product.name;
    this.price = product.price;
    this.description = product.description;
    this.category = new ProductCategory(product.category);
  }
}

export class Product extends _Product<PersistedEntity> {}

export class NotPersistedProduct extends _Product<null> {}
