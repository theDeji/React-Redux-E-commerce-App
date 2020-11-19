const express = require('express');
const router = express.Router();
const app = express()


const user = 'admin'
const pw = 'admin'

router.get('/:username/:password', (req, res) =>{
    const username = req.params.username;
    const password = req.params.password;
    if(username !== user){
        res.status(400).send({"message":"Invalid login"})
    }else{
        if(password === pw){
            res.json({
                status: 200,
                message: 'Yayyy, you are now logged in!'
            })
        }else{
            res.status(400).send({"message":"Invalid login"})
        }
    }
    
})



module.exports = router;