import {UserToken} from './user-token';

interface Name {
  first: string;
  last: string;
}

export interface User extends UserToken {

  id: number;
  name: Name;
  login: string;
  password: string;

}
