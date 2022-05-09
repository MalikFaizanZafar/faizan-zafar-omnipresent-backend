import { HttpService } from '@nestjs/axios';
import { Response, User } from './interfaces';
import UserDTO from './user.dto';
export declare class UserService {
    private readonly httpService;
    apiEndpoint: string;
    regionsForAdditionalID: string[];
    constructor(httpService: HttpService);
    private getUniqueCountries;
    private getDataFromRestCountries;
    private formatRestCountries;
    private formatUsers;
    getUsers(usersData: UserDTO[]): Promise<Response<User>>;
}
