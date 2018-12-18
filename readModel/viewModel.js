const ChatMessages = ({ messages = {}, users = {} } = {}) =>
  Object.values(messages).reduce((chatMessages, msg) => {
    return {
      ...chatMessages,
      [msg.chatId]: (chatMessages[msg.chatId] || []).concat([
        {
          user: users[msg.userId].username,
          content: msg.content,
          sentAt: msg.sentAt,
        },
      ]),
    };
  }, {});

module.exports = {
  ChatMessages,
};
