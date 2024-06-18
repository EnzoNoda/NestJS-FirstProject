import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDto: CreateUserDTO = {
  birthAt: '1999-25-12',
  email: 'enzo.noda@gmail.com',
  name: 'Enzo Noda',
  password: 'Enzo@123',
  role: Role.User,
};
