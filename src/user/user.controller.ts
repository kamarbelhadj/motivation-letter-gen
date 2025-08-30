import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
constructor(private readonly userService:UserService){}

    @Post()
    cerateUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.creatUser(createUserDto);
    }

    @Get()
    findAllUsers() {
        return this.userService.findAllUsers();
    }

  @Get(':id')
findUserById(@Param('id') id: string) {
  return this.userService.getUserById(id);
}

}
