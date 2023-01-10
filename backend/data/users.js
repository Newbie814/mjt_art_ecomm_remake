import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Myrtis Thomas',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),

    isAdmin: true,
  },
  {
    name: 'Steve Rogers',
    email: 'THE_Cap@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ned Stark',
    email: 'headless@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
