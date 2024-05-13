const bcrypt = require('bcryptjs');

const users = [
    { name: 'Rahiche Messaoud', email: 'houssamerahiche@gmail.com', password: '$2a$10$nMAEnau.DSLToVioxwU/0OtIEqTfImnZbOKaVWXhbfMzy158D3qRS', role: 'admin' }
];

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

const comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    users,
    findUserByEmail,
    comparePasswords
};
