import { PersistedEntity } from "./persisted-entity";

class _Customer<T extends PersistedEntity | null> {
  id: T["id"];
  createdAt: T["createdAt"];
  updatedAt: T["updatedAt"];
  name: string;
  email: string;
  document: string;

  constructor(customer: { name: string; email: string; document: string }) {
    this.name = customer.name;
    this.email = customer.email;
    this.document = customer.document;
  }
}

export class Customer extends _Customer<PersistedEntity> {}

export class NotPersistedCustomer extends _Customer<null> {}

