import { NotPersistedProduct, Product } from "src/core/domain/product";

export interface ProductRepository {
  create(product: NotPersistedProduct): Promise<Product>;
}