import { PersistedEntity } from "./persisted-entity";

class _Product<T extends PersistedEntity | null> {
  id: T["id"];
  createdAt: T["createdAt"];
  updatedAt: T["updatedAt"];
  name: string;
  price: number;
}

export class Product extends _Product<PersistedEntity> {}

export class NotPersistedProduct extends _Product<null> {}
