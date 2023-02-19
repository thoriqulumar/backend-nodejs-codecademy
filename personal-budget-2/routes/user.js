const express = require('express')
const router = express.Router()

const {
    createUser
} = require('../controller/user')

/**
 * @swagger
 * /api/v1/user:
 *    post:
 *      summary: Create User
 *      produces:
 *        - application/json
 *      tags:
 *        - User
 *      requestBody:
 *        description: Data for new user
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                job:
 *                  type: integer
 *              example:
 *                title: Haaland
 *                budget: football player
 *      responses:
 *        "201":
 *          description: success create new user
 *        "500":
 *          description: Internal server error
 *
 */
router.post('/', createUser)

module.exports = router;