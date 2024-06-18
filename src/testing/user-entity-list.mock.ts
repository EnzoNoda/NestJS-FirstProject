import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Enzo Noda',
    email: 'enzo.noda@gmail.com',
    birthAt: new Date('1999-25-12'),
    id: 1,
    password: '$2b$10$QfNlpLW4z4qOe.EJh9jI.ewxZAODUq3SOPz7Hayv0HSWCAV2aZGNG',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Erik Noda',
    email: 'erik.noda@gmail.com',
    birthAt: new Date('2003-03-07'),
    id: 2,
    password: '$2b$10$QfNlpLW4z4qOe.EJh9jI.ewxZAODUq3SOPz7Hayv0HSWCAV2aZGNG',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Jessica Aparecida de Souza',
    email: 'jessica@gmail.com',
    birthAt: new Date('2002-29-01'),
    id: 3,
    password: '$2b$10$QfNlpLW4z4qOe.EJh9jI.ewxZAODUq3SOPz7Hayv0HSWCAV2aZGNG',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
