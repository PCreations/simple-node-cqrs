const { toggleMessageLike } = require('../domain/message');

const handleToggleMessageLike = ({
  getMessageOfId,
  saveMessage,
}) => async toggleMessageLikeCommandPayload => {
  const { messageId, userId } = toggleMessageLikeCommandPayload;
  const message = await getMessageOfId(messageId);
  return saveMessage(
    toggleMessageLike({
      messageState: message,
      userId,
    }),
  );
};

module.exports = {
  handleToggleMessageLike,
};
