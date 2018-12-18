const { ChatMessages } = require('./viewModel');

const SimpleNodeCQRSreadModel = ({
  addOnDbUpdatedListener,
  viewUpdatedCallback = (views = { chatMessages: {} }) => {},
}) => {
  const views = {
    chatMessages: {},
  };
  addOnDbUpdatedListener(db => {
    views.chatMessages = ChatMessages({
      messages: db.messages,
      users: db.users,
    });
    viewUpdatedCallback(views);
  });
};

module.exports = {
  SimpleNodeCQRSreadModel,
};
