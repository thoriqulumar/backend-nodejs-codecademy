const { db } = require('../database');
const { nanoid } = require('nanoid')

const createUser = async (req, res) =>{
    const { name, job } = req.body;
    const createId = nanoid(16)
    try { 
        const query = 'INSERT INTO users(id, name, job) VALUES($1, $2, $3)  RETURNING id';
        
        const newUser = await db.query(query, [createId, name, job] )

        if (newUser.rows[0].id){
            res.status(201).send({
                status: 'Success',
                message: `New user has been created`
            })
        }

    } catch (err) {
        res.status(500).send({
            error: err.message
        })
    }
}

module.exports = {
    createUser,
}