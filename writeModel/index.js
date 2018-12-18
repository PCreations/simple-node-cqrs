const { handleSendMessage } = require('./commandHandlers/handleSendMessage');
const { handleToggleMessageLike } = require('./commandHandlers/handleToggleMessageLike');
const { commands } = require('./domain/commands');

const SimpleNodeCQRSwriteModel = ({
  dispatchCommand,
  handleCommand,
  getChatOfId,
  getNextMessageId,
  getMessageOfId,
  saveMessage,
  saveChat,
}) => {
  handleCommand(
    commands.types.SEND_MESSAGE,
    handleSendMessage({ getChatOfId, getNextMessageId, saveMessage }),
  );
  handleCommand(commands.types.TOGGLE_MESSAGE_LIKE, handleToggleMessageLike({ getMessageOfId, saveMessage }));
  return dispatchCommand;
};

module.exports = {
  SimpleNodeCQRSwriteModel,
};
