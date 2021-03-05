const { response } = require('express');
const express= require('express');
const router =  express.Router()
const Myregister =  require('../models/SignUpModels')

router.get('/test', (request, response) => {
    response.json("test")

});

    router.post('/signup', (request, response) => {
    const signedUpUser = new Myregister({
        fullname:request.body.fullname,
        email:request.body.email,
        message:request.body.message,
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})
module.exports =  router;