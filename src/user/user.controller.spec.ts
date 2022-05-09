import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import Sample from "./test.sample";

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [HttpModule]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return list of modified users when /users Endpoint is triggered ', async() => {
    const { input , expectedOutput } = Sample
    const output = await controller.getUsers(input)
    expect(output.status).toBe(expectedOutput.status);
    expect(output.message).toBe(expectedOutput.message);
    // Array of Objects comparison using JSON.stringify
    expect(JSON.stringify(output.payload)).toBe(JSON.stringify(expectedOutput.payload));
  })

});
