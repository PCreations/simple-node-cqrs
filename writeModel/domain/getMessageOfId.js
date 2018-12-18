const { Message } = require('./message');

const getMessageOfId = (getMessageOfId = async id => Message({ id })) => async id => {
  try {
    const messageState = await getMessageOfId(id);
    if (typeof messageState === 'undefined') {
      throw messageState;
    }
    return messageState;
  } catch (e) {
    throw new Error(`message with id ${id} was not found`);
  }
};

module.exports = {
  getMessageOfId,
};
