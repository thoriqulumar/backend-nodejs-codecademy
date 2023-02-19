const express = require('express')
const router = express.Router()

const {
    createEnvelope,
    getAllEnvelopeByUserId,
    getEnvelopeById,
    deleteEnvelopeById,
    updateEnvelopeById
} = require('../controller/envelopes')

/**
 * @swagger
 * /api/v1/envelopes:
 *    post:
 *      summary: Create Envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope ID
 *          type: string
 *          required: true
 *          example: id123forenvelope
 *      requestBody:
 *        description: Data for new envelope
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *                title:
 *                  type: string
 *                budget:
 *                  type: integer
 *              example:
 *                userId: 1asddm101123
 *                title: Haaland
 *                budget: football player
 *      responses:
 *        "201":
 *          description: success create new envelope
 *        "500":
 *          description: Internal server error
 *
 */
router.post('/', createEnvelope)

/**
 * @swagger
 * /api/v1/envelopes:
 *    get:
 *      summary: Get all envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      requestBody:
 *        description: Get all envelope data by user id
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *              example:
 *                userId: 1asddm101123
 *      responses:
 *        "201":
 *          description: return list envelopes by userId
 *        "500":
 *          description: Internal server error
 *
 */
router.get('/', getAllEnvelopeByUserId)

/**
 * @swagger
 * /api/v1/envelopes/{id}:
 *    get:
 *      summary: Get envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope ID
 *          type: string
 *          required: true
 *          example: id123forenvelope
 *      requestBody:
 *        description: Get envelope by user id and envelope
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *              example:
 *                userId: 1asddm101123
 *      responses:
 *        "201":
 *          description: return an envelopes by user id and envelope id
 *        "500":
 *          description: Internal server error
 *
 */
router.get('/:id', getEnvelopeById)

/**
 * @swagger
 * /api/v1/envelopes/{id}:
 *    delete:
 *      summary: delete envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope ID
 *          type: string
 *          required: true
 *          example: id123forenvelope
 *      requestBody:
 *        description: delete envelope by user id and envelope
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *              example:
 *                userId: 1asddm101123
 *      responses:
 *        "201":
 *          description: return message deleted success
 *        "500":
 *          description: Internal server error
 *
 */
router.delete('/:id', deleteEnvelopeById)

/**
 * @swagger
 * /api/v1/envelopes/{id}:
 *    put:
 *      summary: update envelope
 *      produces:
 *        - application/json
 *      tags:
 *        - Envelopes
 *      parameters:
 *        - in: path
 *          name: id
 *          description: envelope ID
 *          type: string
 *          required: true
 *          example: id123forenvelope
 *       requestBody:
 *        description: update envelope by user id and envelope id
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *                title:
 *                  type: string
 *                budget:
 *                  type: integer
 *              example:
 *                userId: 1asddm101123
 *                title: Haaland
 *                budget: football player
 *      responses:
 *        "201":
 *          description: return message update success
 *        "500":
 *          description: Internal server error
 *
 */
router.put('/:id', updateEnvelopeById)

module.exports = router;