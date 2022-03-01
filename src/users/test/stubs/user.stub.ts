import { User } from 'src/users/schemas/user.schema';

export const userStub = (): User => {
  return {
    name: 'arthur',
    age: 19,
    citizenship: 'brazilian',
  };
};
