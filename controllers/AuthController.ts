const {Request, Response} =require('express')
const bcrypt =require('bcryptjs')
const jwt =require('jsonwebtoken')
const {findUserByEmail,comparePasswords} =require('../models/User')

export const login = async (req: Request, res: Response) => {
    try{
        const {email, password} = req.body
        
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        const user = findUserByEmail(email)
        if (!user){
            return res.status(404).send('User not found')
        }
        
        const isValidPassword = await comparePasswords(password, user.password)
        if(!isValidPassword){
            return res.status(401).json({message: 'Invalid password'})
        }

        const token = jwt.sign({email}, 'metaPro')
        
        res.status(200).json({...user, token: token})
    }catch (err) {
        console.log(err)
        res.status(500).json({message: 'Internal server error'})
    }
}