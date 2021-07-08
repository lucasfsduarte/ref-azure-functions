"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
class UsersResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserInput) {
        return this.usersService.create(createUserInput);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findOne(id) {
        return this.usersService.findOne(id);
    }
    update(updateUserInput) {
        return this.usersService.update(updateUserInput.id, updateUserInput);
    }
    remove(id) {
        return this.usersService.remove(id);
    }
}
exports.UsersResolver = UsersResolver;
//# sourceMappingURL=users.resolver.js.map