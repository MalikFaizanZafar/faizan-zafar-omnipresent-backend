import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response, User } from './interfaces';
import UserDTO from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/')
    @UsePipes(new ValidationPipe())
    getUsers(@Body() usersData: UserDTO[]): Promise<Response<User>> {
        return this.userService.getUsers(usersData);
    }
}
