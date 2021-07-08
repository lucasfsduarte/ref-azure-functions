import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersService {
    create(_createUserInput: CreateUserInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, _updateUserInput: UpdateUserInput): string;
    remove(id: number): string;
}
