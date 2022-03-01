import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  public create(createUserDto): any {
    const createdUser = this.usersRepository.create(createUserDto);
    return createdUser;
  }

  public read(): any {
    return this.usersRepository.findAll();
  }

  public update({ name }): any {
    return this.usersRepository.update(
      { name },
      {
        name: name + ' ' + String(Math.random() * 100).slice(-2),
      },
    );
  }

  public destroy({ name }): any {
    return this.usersRepository.destroy({ name });
  }

  public async axios(): Promise<any> {
    const { data } = await axios.get(`http://localhost:3005/test`);
    return data;
  }
}
