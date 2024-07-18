import { PersistedEntity } from "./persisted-entity";

class _Customer<T extends PersistedEntity | null> {
  id: T["id"];
  createdAt: T["createdAt"];
  updatedAt: T["updatedAt"];
  name: string;
  email: string;
  document: string;
}

export class Customer extends _Customer<PersistedEntity> {}

export class NotPersistedCustomer extends _Customer<null> {}

