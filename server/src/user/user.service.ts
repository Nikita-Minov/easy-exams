import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';
import {User} from '../models/user.model';
import {CreateUserDto} from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser({username, email, password}:CreateUserDto) {
    const hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
    return this.userModel.create({username, email, password: hash});
  }
}
