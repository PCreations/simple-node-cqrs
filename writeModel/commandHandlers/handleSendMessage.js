const { sendMessage } = require('../domain/chat');

const handleSendMessage = ({
  getChatOfId,
  getNextMessageId,
  saveMessage,
}) => async sendMessageCommandPayload => {
  const { chatId, userId, content, sentAt } = sendMessageCommandPayload;
  const chat = await getChatOfId(chatId);
  return saveMessage(
    sendMessage({
      chatState: chat,
      messageId: getNextMessageId(),
      userId,
      content,
      sentAt,
    }),
  );
};

module.exports = {
  handleSendMessage,
};
