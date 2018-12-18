const invariant = require('invariant');
const { Message } = require('./message');

const Chat = ({ id, isClosed } = {}) =>
  Object.freeze({
    id,
    isClosed,
  });

const sendMessage = ({ chatState, messageId, userId, content, sentAt }) => {
  invariant(!chatState.isClosed, "can't post in a closed chat");
  return Message({ id: messageId, chatId: chatState.id, userId, content, sentAt });
};

module.exports = {
  Chat,
  sendMessage,
};
