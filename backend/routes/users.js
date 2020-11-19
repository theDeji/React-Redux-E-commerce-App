const express = require('express');
const router = express.Router();
const app = express()

const user = 'deji'
const pw = 'deemma01'


router.get('/user/:username/:password', (req, res) =>{
    const username = req.params.username;
    const password = req.params.password;
    if(username !== user){
        res.status(400).send({"message":"Invalid login"})
    }else{
        if(password === pw){
            res.status(200).send({"message":"You are logged in"})

        }else{
            res.status(400).send({"message":"Invalid login"})
        }
    }
})


module.exports = router;