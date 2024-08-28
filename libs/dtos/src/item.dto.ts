import { ApiProperty } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';
import { IsAlpha, IsEmail, IsNotEmpty, IsNumber, IsPositive, Max, Min } from 'class-validator';
export interface ItemDtoInterface {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

export class ItemDto implements ItemDtoInterface {
  @ApiProperty({ type: String, example: faker.person.firstName() })
  @IsNotEmpty()
  @IsAlpha()
  firstName = '';

  @ApiProperty({ type: String, example: faker.person.lastName() })
  @IsNotEmpty()
  @IsAlpha()
  lastName = '';

  @ApiProperty({ type: String, example: faker.internet.email() })
  @IsNotEmpty()
  @IsEmail()
  email = '';

  @ApiProperty({ type: Number, example: faker.number.int({ min: 18, max: 99 }) })
  @IsNumber()
  @IsPositive()
  @Min(18)
  @Max(99)
  age = 0;
}

export const getItemDtoFixture = (): ItemDto => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  age: faker.number.int({ min: 18, max: 99 }),
});

export const getItemsDtoFixture = (count: number): ItemDto[] => Array.from({ length: count }, () => getItemDtoFixture());
