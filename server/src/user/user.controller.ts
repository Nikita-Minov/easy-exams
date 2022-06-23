import {Controller, Post, Body} from '@nestjs/common';
import {UserService} from './user.service';
import {CreateUserDto} from './dto/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private userRepository: UserService) {}

  @Post()
  createUser(
  @Body() createUserDto: CreateUserDto
  ) {
    return this.userRepository.createUser(createUserDto);
  }
}