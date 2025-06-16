import { FactoryItem } from './FactoryItem';
import { faker } from '@faker-js/faker';

export class User extends FactoryItem {
  constructor(options = {}) {
    super(options);
    this._firstName = this.generateFirstName();
    this._lastName = this.generateLastName();
    this.username = options.username ?? this.generateUsername();
    this.email = options.email ?? this.generateEmail();
    this.password = options.password ?? this.generatePassword();
  }

  generateFirstName() {
    return faker.person.firstName();
  }

  generateLastName() {
    return faker.person.lastName();
  }

  generateUsername() {
    return `${this._firstName}_${this._lastName}`.replaceAll(`'`).toLowerCase();
  }

  generateEmail() {
    return `${this._firstName}_${faker.internet.email()}`.toLowerCase();
  }

  generatePassword() {
    return faker.internet.password();
  }
}
