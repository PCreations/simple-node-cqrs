const { commands } = require('../writeModel/domain/commands');
const { InMemoryRepository } = require('../writeModel/infrastructure/inMemory');
const { TestReadModel, TestWriteModel } = require('./testUtils');

process.on('unhandledRejection', reason => {
  throw reason;
});

describe('feature : sending a message', () => {
  describe('given a db containing few users and a chat with id "chat42"', () => {
    describe('when "user42" sends a message in the "chat42"', () => {
      test('then the message should appear in the message list of the "chat42"', async () => {
        expect.assertions(1);
        const {
          saveMessage,
          saveChat,
          getChatOfId,
          getMessageOfId,
          getNextMessageId,
          addOnDbUpdatedListener,
        } = InMemoryRepository({
          chats: {
            chat42: {
              id: 'chat42',
              isClosed: false,
            },
            chat43: {
              id: 'chat43',
              isClosed: false,
            },
          },
          messages: {},
          users: {
            user41: { id: 'user41', username: 'User 41' },
            user42: { id: 'user42', username: 'User 42' },
          },
        });
        const dispatchCommand = TestWriteModel({
          saveMessage,
          saveChat,
          getChatOfId,
          getMessageOfId,
          getNextMessageId,
        });
        TestReadModel({
          addOnDbUpdatedListener,
          viewUpdatedCallback: ({ chatMessages }) => {
            expect(chatMessages).toMatchSnapshot(
              'chat43 should be empty but chat42 should have the message from user42',
            );
          },
        });
        dispatchCommand(
          commands.sendMessage({
            chatId: 'chat42',
            userId: 'user42',
            content: "It's the very first message !",
            sentAt: 1545130856133,
          }),
        );
      });
    });
  });
});
