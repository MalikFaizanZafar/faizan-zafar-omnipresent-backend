import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import Sample from "./test.sample";

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      imports: [HttpModule]
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return list of modified users', async() => {
    const { input , expectedOutput } = Sample
    const output = await service.getUsers(input)
    expect(output.status).toBe(expectedOutput.status);
    expect(output.message).toBe(expectedOutput.message);
    // Array of Objects comparison using JSON.stringify
    expect(JSON.stringify(output.payload)).toBe(JSON.stringify(expectedOutput.payload));
  });
});
