import {User} from './user';

describe('User', () => {

  let user: User;
  const id = 111;
  const firstName = 'Ivan';
  const lastName = 'Ivanov';
  const email = 'ivan_ivanov@some.com';

  beforeEach(() => {
    user = new User(email, firstName, lastName, id);
  });

  it('should create an instance', () => {
    expect(user).toBeTruthy();
    expect(user.id).toBe(id);
    expect(user.firstName).toBe(firstName);
    expect(user.lastName).toBe(lastName);
    expect(user.email).toBe(email);
  });

});
