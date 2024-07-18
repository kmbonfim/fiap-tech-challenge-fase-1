import { Customer, NotPersistedCustomer } from "src/core/domain/customer";

export interface CustomerRepository {
  create(customer: NotPersistedCustomer): Promise<Customer>;
  findByEmailAndDocument(email: string): Promise<Customer>;
}