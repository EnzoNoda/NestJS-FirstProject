import { AuthResetDTO } from '../auth/dto/auth-reset.dto';
import { resetToken } from './reset-token.mock';

export const authResetDTO: AuthResetDTO = {
  password: '5678',
  token: resetToken,
};
