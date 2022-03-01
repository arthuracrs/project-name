import { userStub } from '../test/stubs/user.stub';

export const UsersService = jest.fn().mockResolvedValue({
  create: jest.fn().mockReturnValue(userStub()),
  read: jest.fn().mockReturnValue([userStub()]),
  update: jest.fn().mockReturnValue(userStub()),
  destroy: jest.fn().mockReturnValue({}),
});
