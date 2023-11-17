import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface NewUser {
  'age' : bigint,
  'name' : string,
  'address' : string,
  'image' : string,
}
export interface User {
  'id' : bigint,
  'age' : bigint,
  'name' : string,
  'address' : string,
  'image' : string,
}
export interface _SERVICE {
  'addUser' : ActorMethod<[NewUser], undefined>,
  'deleteUser' : ActorMethod<[bigint], undefined>,
  'findByUserName' : ActorMethod<[string], [] | [User]>,
  'getUser' : ActorMethod<[], Array<User>>,
  'updateUserById' : ActorMethod<[bigint, User], undefined>,
}
