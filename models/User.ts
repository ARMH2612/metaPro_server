import bcrypt from 'bcryptjs'

export interface User {
    name : string
    email: string
    password: string
    role: string
}

export const users : User[] = [
    {name: 'Rahiche Messaoud', email: 'houssamerahiche@gmail.com', password: '$2a$10$nMAEnau.DSLToVioxwU/0OtIEqTfImnZbOKaVWXhbfMzy158D3qRS', role:'admin'}
]

export const findUserByEmail = (email: string): User | undefined => {
    return users.find(user => user.email === email);
};
  
export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashedPassword);
};