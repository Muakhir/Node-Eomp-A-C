import express from "express";
import bodyParser from "body-parser";
import { users } from "../model/index.js";
import { verifyToken } from "../middleware/AuthenticateUser.js";

const userRouter = express.Router();

//fetch users
userRouter.get('/', (req,res)=>{
    try{
        users.fetchUsers(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve users"
        })
    }
})
//fetch user
userRouter.get('/:id', (req,res)=>{
    try{
        users.fetchUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to retrieve the user"
        })
    }
})
//Add a user
userRouter.post('/register', bodyParser.json(),(req,res)=>{
    try{
        users.createUser(req,res)
    }catch(e){
        res.json({
            status: res.statusCode,
            msg: "Failed to add a new user"
        })
    }
})

// Delete a user
userRouter.delete('/:id/deleteUser',bodyParser.json(),(req,res)=>{
    try{
        users.deleteUser(req,res)
    }catch(e){
        res.json({status: res.statusCode, msg: "Failed to delete a user"})
    }
})

// Update a user
userRouter.patch('/:id/updateUser',bodyParser.json(),(req,res)=>{
    try{
        users.alterUser(req,res)
    }catch(e){
        res.json({status: res.statusCode, msg: "Failed to update a user"})
    }
})

// login route
userRouter.post('/:id/login',bodyParser.json(),(req,res)=>{
try{users.login(req,res)}catch(e){
res.json({status: res.statusCode, msg: "Failed to login"})
}
})

export{
    userRouter,express
}
