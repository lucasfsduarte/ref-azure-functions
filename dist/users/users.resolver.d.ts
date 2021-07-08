import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserInput: CreateUserInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(updateUserInput: UpdateUserInput): string;
    remove(id: number): string;
}
