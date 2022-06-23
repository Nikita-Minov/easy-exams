import {IsEmail, MinLength} from "class-validator";

export class CreateUserDto {
  @MinLength(6, {
    message: "Username length must be at least 6 characters"
  })
  username: string;

  @IsEmail()
  email: string;

  @MinLength(6, {
    message: 'Password length must be at least 6 characters '
  })
  password: string;
}
