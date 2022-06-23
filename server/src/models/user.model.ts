import {Column, Model, Table} from 'sequelize-typescript';

interface UserParam {
  username: string;
  email: string;
  password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserParam> {
  @Column
    username: string;

  @Column
    email: string;

  @Column
    password: string;
}
