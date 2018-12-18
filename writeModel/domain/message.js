const Message = ({ id, chatId, userId, content, sentAt, messageLikes = [] } = {}) =>
  Object.freeze({
    id,
    chatId,
    userId,
    content,
    sentAt,
    messageLikes,
  });

const toggleMessageLike = ({ messageState, userId }) =>
  Message({
    ...messageState,
    messageLikes: messageState.messageLikes.includes(userId)
      ? messageState.messageLikes.filter(likeUserId => likeUserId !== userId)
      : messageState.messageLikes.concat([userId]),
  });

module.exports = {
  Message,
  toggleMessageLike,
};
