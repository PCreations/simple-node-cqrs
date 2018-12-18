const EventEmitter = require('events');
const { SimpleNodeCQRSwriteModel } = require('../writeModel');
const { SimpleNodeCQRSreadModel } = require('../readModel');

const TestWriteModel = ({ saveMessage, saveChat, getChatOfId, getMessageOfId, getNextMessageId }) => {
  const commandEmitter = new EventEmitter();
  const dispatchCommand = command => commandEmitter.emit(command.type, command.payload);
  const handleCommand = (commandType, commandHandler) => {
    commandEmitter.on(commandType, commandHandler);
  };
  return SimpleNodeCQRSwriteModel({
    dispatchCommand,
    handleCommand,
    getChatOfId,
    getMessageOfId,
    getNextMessageId,
    saveChat,
    saveMessage,
  });
};

const TestReadModel = ({ addOnDbUpdatedListener, viewUpdatedCallback }) => {
  return SimpleNodeCQRSreadModel({
    addOnDbUpdatedListener,
    viewUpdatedCallback,
  });
};

module.exports = {
  TestWriteModel,
  TestReadModel,
};
