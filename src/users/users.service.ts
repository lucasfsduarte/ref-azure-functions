import { Injectable } from '@nestjs/common'

import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

// A repository is a link to the database resources in this module
// import { User } from './entities/user.entity'
// import { Repository } from 'typeorm'

@Injectable()
export class UsersService {
  // constructor(
  //   @InjectRepository(User)
  //   private userRepository: Repository<User>,
  // ) { }

  create(_createUserInput: CreateUserInput) {
    return 'This action adds a new user'
  }

  findAll() {
    // return this.userRepository.find()
    return `This action returns all users`
  }

  findOne(id: number) {
    // return this.userRepository.findOne(id)
    return `This action returns a #${id} user`
  }

  update(id: number, _updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
