const express = require('express');

const User = require('../Models/user');

const router = express.Router();

router.post('/register', async (request, response) => {
    try {
        const user = await User.create(request.body);

        return response.send({ user });
    } catch (err) {
        return response.status(400).send({ error: 'Register failed' });
    }
});

module.exports = app => app.use('/auth', router);