const { Chat } = require('./message');

const getChatOfId = (getChatOfId = async id => Chat({ id })) => async id => {
  try {
    const chatState = await getChatOfId(id);
    if (typeof chatState === 'undefined') {
      throw chatState;
    }
    return chatState;
  } catch (e) {
    throw new Error(`chat with id ${id} was not found`);
  }
};

module.exports = {
  getChatOfId,
};
