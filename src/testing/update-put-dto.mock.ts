import { Role } from '../enums/role.enum';
import { UpdateUserDTO } from '../user/dto/update-put-user.dto';

export const updateUserDto: UpdateUserDTO = {
  birthAt: '1999-25-12',
  email: 'enzo.noda@gmail.com',
  name: 'Enzo Noda',
  password: 'Enzo@123',
  role: Role.User,
};
