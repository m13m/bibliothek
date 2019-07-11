const express = require('express');
const debug = require('debug')('app:authRoutes');

const authRouter = express.Router();

function router() {
    authRouter.route('/signup')
        .post((req, res) => {

            debug(res.body)
        });
    return authRouter;
}

module.exports = router;
