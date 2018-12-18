const commands = {
  types: {
    TOGGLE_CHAT_AVAILABILITY: '[chat] toggle chat availibility',
    SEND_MESSAGE: '[chat] send a message',
    TOGGLE_MESSAGE_LIKE: '[message] toggle a like on a message',
  },
  TOGGLE_CHAT_AVAILABILITY({ chatId }) {
    return Object.freeze({
      type: commands.types.TOGGLE_CHAT_AVAILABILITY,
      payload: { chatId },
    });
  },
  sendMessage({ chatId, userId, content, sentAt }) {
    return Object.freeze({
      type: commands.types.SEND_MESSAGE,
      payload: {
        chatId,
        userId,
        content,
        sentAt,
      },
    });
  },
  toggleMessageLike({ messageId, userId }) {
    return Object.freeze({
      type: command.types.TOGGLE_MESSAGE_LIKE,
      payload: {
        messageId,
        userId,
      },
    });
  },
};

module.exports = {
  commands,
};
