const data = require('../data/data');
const {
  createId,
  findDataById,
  deleteDataById,
} = require('../helpers/dataHelpers');

// @desc		Get all Envelopes
// @route		GET /api/v1
const getData = async (req, res, next) => {
  try {
    const envelopes = await data;
    res.status(200).send(envelopes);
  } catch (error) {
    res.status(400).send(error);
  }
};

// @desc		Get all Envelopes
// @route		GET /api/v1/:id
const getDataById = async (req, res, next) => {
  try {
    const envelopes = await data;
    const { id } = req.params;

    const envelope = findDataById(envelopes, id);

    if (!envelope) {
      res.status(400).send({ message: 'data not found' });
    }
    res.status(200).send(envelope);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// @desc		add data envelope
// @route		POST /api/v1
const addData = async (req, res, next) => {
  try {
    const { title, budget } = req.body;
    const envelopes = await data;

    const newId = createId(envelopes);

    const newEnvelope = {
      id: newId,
      title,
      budget,
    };
    envelopes.push(newEnvelope);
    res.status(201).send(newEnvelope);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// @desc		update data envelope
// @route		PUT /api/v1/:id
const updateData = async (req, res, next) => {
  try {
    const envelopes = await data;
    const { title, budget } = req.body;
    const { id } = req.params;

    const envelope = findDataById(data, id);

    if (!envelope) {
      res.status(400).send({ message: 'data not found' });
    }
    envelope.title = title;
    envelope.budget = budget;
    res.status(201).send(envelopes);
  } catch (error) {
    res.status(500).send(error);
  }
};

// @desc		update data envelope
// @route		DELETE /api/v1/:id
const deleteData = async (req, res, next) => {
  try {
    const envelopes = await data;
    const { id } = req.params;
    const envelope = findDataById(envelopes, id);
    console.log('deleteData');
    if (!envelope) {
      res.status(400).send({ message: 'data not found' });
    }

    const updatedEnvelopes = deleteDataById(envelopes, id);
    console.log(updatedEnvelopes);
    res.status(201).send(updatedEnvelopes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getData,
  getDataById,
  addData,
  updateData,
  deleteData,
};
