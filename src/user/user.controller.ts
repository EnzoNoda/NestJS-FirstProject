import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UserService } from './user.service';

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
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.showOne(id);
  }

  @Put(':id')
  async update(
    @Body() body: UpdateUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.update(id, body);
  }

  @Patch(':id')
  async updatePartial(
    @Body() body: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.userService.updatePartial(id, body);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
