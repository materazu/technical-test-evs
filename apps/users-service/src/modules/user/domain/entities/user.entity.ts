import { faker } from '@faker-js/faker';

export class User {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    public readonly age: number,
  ) {}
}

export const getUserFixture = (): User => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  age: faker.number.int({ min: 18, max: 99 }),
});

export const getUsersFixture = (count: number): User[] => Array.from({ length: count }, () => getUserFixture());
