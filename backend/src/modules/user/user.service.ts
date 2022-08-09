import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/entities/user.entity';
import { UserRepository } from 'src/model/repositories/user.repository';
import { CreateUserDto } from '../auth/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepo: UserRepository) {}
  async getUserById(userId: number): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: {
        id: userId,
      },
    });
    return user;
  }
  async createUser(createUserDto: CreateUserDto) {
    const user = this.userRepo.create({
      email: createUserDto.email,
      password: createUserDto.password,
      name: createUserDto.name,
    });
    user.save();
    return user;
  }

  async showById(id: number): Promise<UserEntity> {
    const user = await this.findById(id);
    delete user.password;
    return user;
  }
  async findById(id: number): Promise<UserEntity> {
    return await this.userRepo.findOne({
      where: {
        id: id,
      },
    });
  }
  async findByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: {
        email: email,
      },
    });
    return user;
  }
}
