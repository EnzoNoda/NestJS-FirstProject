import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  // UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

import { UserService } from './user.service';
import { ParamId } from 'src/decorators/param-id.dacorator';
// import { LogInterceptor } from 'src/interceptors/log.interceptors';

// @UseInterceptors(LogInterceptor)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async crete(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Get()
  async read() {
    return this.userService.list();
  }

  @Get(':id')
  async readOne(@ParamId() id: number) {
    return this.userService.showOne(id);
  }

  @Put(':id')
  async update(@Body() body: UpdateUserDTO, @ParamId() id: number) {
    return this.userService.update(id, body);
  }

  @Patch(':id')
  async updatePartial(@Body() body: UpdatePatchUserDTO, @ParamId() id: number) {
    return this.userService.updatePartial(id, body);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    return this.userService.delete(id);
  }
}
