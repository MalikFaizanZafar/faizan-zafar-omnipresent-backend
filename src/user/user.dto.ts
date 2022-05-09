import { IsNotEmpty } from 'class-validator';

export default class UserDTO {
  @IsNotEmpty()
  firstName: string;
  @IsNotEmpty()
  lastName: string;
  @IsNotEmpty()
  dateOfBirth: string;
  @IsNotEmpty()
  jobTitle: string;
  @IsNotEmpty()
  company: string;
  @IsNotEmpty()
  country: string;
}