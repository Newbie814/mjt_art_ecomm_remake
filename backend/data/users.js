import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Myrtis Thomas',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    password: xxxx,
    isAdmin: true,
  },
  {
    name: 'Steve Rogers',
    email: 'THE_Cap@example.com',
    password: bcrypt.hashSync('123456', 10),
    password: xxxx,
  },
  {
    name: 'Ned Stark',
    email: 'headless@example.com',
    password: bcrypt.hashSync('123456', 10),
    password: xxxx,
  },
];

export default users;
