const { db } = require('../database');
const { nanoid } = require('nanoid')

const createEnvelope = async (req, res) =>{
    const { userId, title, budget } = req.body;
    const createId = nanoid(16)

    try { 
        const query = 'INSERT INTO envelopes(id, user_id, title, budget) VALUES($1, $2, $3, $4)  RETURNING *';
        
        const newUser = await db.query(query, [createId, userId, title, budget] )

        if (newUser.rows[0].id){
            res.status(201).send({
                status: 'Success',
                message: `New envelopes has been created`,
                data: newUser.rows[0],
            })
        }

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}

const getAllEnvelopeByUserId = async (req, res) =>{
    const { userId} = req.body;

    try { 
        const query = 'SELECT * FROM envelopes WHERE user_id = $1';
        
        const envelopes = await db.query(query, [userId] )

      
        res.status(201).send({
            status: 'Success',
            data: envelopes.rows
        })
       

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}

const getEnvelopeById = async (req, res) =>{
    const { userId} = req.body;
    const { id } = req.params;

    try { 
        const query = 'SELECT * FROM envelopes WHERE user_id = $1 AND id = $2';
        
        const envelope = await db.query(query, [userId, id] )

        res.status(201).send({
            status: 'Success',
            data: envelope.rows[0]
        })
    

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}

const deleteEnvelopeById = async (req, res) =>{
   const { userId} = req.body;
    const { id } = req.params;

    try { 
        const query = 'DELETE FROM envelopes WHERE user_id = $1 AND id = $2 RETURNING id';
        
        const envelope = await db.query(query, [userId, id] )
        
        if (envelope.rows[0].id){
            res.status(201).send({
                status: 'Success',
                message: `Envelopes has been deleted`,
            })
        }
    

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}

const updateEnvelopeById = async (req, res) =>{
    const { userId, title, budget } = req.body;
    const { id } = req.params;
    try { 
        const query = 'UPDATE envelopes SET title=$1, budget=$2 WHERE user_id = $3 AND id = $4  RETURNING id';
        
        const envelope = await db.query(query, [title, budget, userId, id] )

        if (envelope.rows[0].id){
            res.status(201).send({
                status: 'Success',
                message: `envelope has been updated`
            })
        }

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}
module.exports = {
    createEnvelope,
    getAllEnvelopeByUserId,
    getEnvelopeById,
    deleteEnvelopeById,
    updateEnvelopeById
}