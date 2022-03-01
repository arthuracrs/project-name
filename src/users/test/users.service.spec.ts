import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../users.service';
import { getModelToken } from '@nestjs/mongoose';
import { User } from '../schemas/user.schema';
import { UsersRepository } from '../users.repository';

describe('UsersService', () => {
  let service: UsersService;

  const mockRepository = {
    deleteOne: jest.fn(),
    save: jest.fn(),
    findOneAndUpdate: jest.fn(),
    find: jest.fn().mockReturnValue({ exec: () => 'shazam' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        UsersRepository,
        {
          provide: getModelToken(User.name),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service.read()).toEqual('shazam');
    expect(service).toBeDefined();
  });
});
