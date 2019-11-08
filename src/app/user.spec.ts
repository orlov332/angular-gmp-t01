import {User} from './user';

describe('User', () => {

  let user: User;
  const id = 111;
  const firstName = 'Ivan';
  const lastName = 'Ivanov';

  beforeEach(() => {
    user = new User(id, firstName, lastName);
  });

  it('should create an instance', () => {
    expect(user).toBeTruthy();
    expect(user.id).toBe(id);
    expect(user.firstName).toBe(firstName);
    expect(user.lastName).toBe(lastName);
  });

});
