module.exports = {
  createId(data) {
    latestRecord = data[data.length - 1];
    const newId = latestRecord.id + 1;
    if (!newId) {
      console.log('invalid ID');
    }

    return newId;
  },

  findDataById(data, id) {
    const record = data.find((item) => item.id === parseInt(id));

    if (!record) {
      console.log('data not found');
    }
    return record;
  },

  deleteDataById(data, id) {
    const record = data.find((item) => 
      item.id === parseInt(id)
    );
    const index = data.indexOf(record);
    if (index === -1) {
      console.log('data not found');
    }
    data.splice(index, 1);
    return data;
  },
};
