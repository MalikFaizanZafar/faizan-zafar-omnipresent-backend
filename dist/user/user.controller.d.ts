import { Response, User } from './interfaces';
import UserDTO from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(usersData: UserDTO[]): Promise<Response<User>>;
}
