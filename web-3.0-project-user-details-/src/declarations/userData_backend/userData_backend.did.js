export const idlFactory = ({ IDL }) => {
  const NewUser = IDL.Record({
    'age' : IDL.Nat,
    'name' : IDL.Text,
    'address' : IDL.Text,
    'image' : IDL.Text,
  });
  const User = IDL.Record({
    'id' : IDL.Nat,
    'age' : IDL.Nat,
    'name' : IDL.Text,
    'address' : IDL.Text,
    'image' : IDL.Text,
  });
  return IDL.Service({
    'addUser' : IDL.Func([NewUser], [], []),
    'deleteUser' : IDL.Func([IDL.Nat], [], []),
    'findByUserName' : IDL.Func([IDL.Text], [IDL.Opt(User)], []),
    'getUser' : IDL.Func([], [IDL.Vec(User)], ['query']),
    'updateUserById' : IDL.Func([IDL.Nat, User], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
