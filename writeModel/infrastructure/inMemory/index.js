const uuid = require('uuid/v1');
const { saveMessage } = require('../../domain/saveMessage');
const { saveChat } = require('../../domain/saveChat');
const { getChatOfId } = require('../../domain/getChatOfId');
const { getMessageOfId } = require('../../domain/getMessageOfId');
const { getNextMessageId } = require('../../domain/getNextMessageId');

const InMemoryRepository = (initialDbState = { chats: {}, messages: {}, users: {} }) => {
  const listeners = [];

  const db = {
    ...initialDbState,
  };

  const addOnDbUpdatedListener = onDbUpdated => listeners.push(onDbUpdated);

  const updateDb = updater => {
    updater();
    listeners.map(listener => listener(db));
  };

  const saveMessageInMemory = saveMessage(async messageState => {
    updateDb(() => (db.messages[messageState.id] = messageState));
  });

  const saveChatInMemory = saveChat(async chatState => {
    updateDb(() => (db.chats[chatState.id] = chatState));
  });

  const getChatOfIdFromMemory = getChatOfId(async id => db.chats[id]);

  const getMessageOfIdFromMemory = getMessageOfId(async id => db.messages[id]);

  const getNextMessageUuid = getNextMessageId(uuid);

  return {
    addOnDbUpdatedListener,
    saveMessage: saveMessageInMemory,
    saveChat: saveChatInMemory,
    getChatOfId: getChatOfIdFromMemory,
    getMessageOfId: getMessageOfIdFromMemory,
    getNextMessageId: getNextMessageUuid,
  };
};

module.exports = {
  InMemoryRepository,
};
