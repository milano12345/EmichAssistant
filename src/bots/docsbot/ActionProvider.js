class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleMessageParserDocs = () => {
    const messages = this.createChatBotMessage(
      "Hi there, I'd like to connect you to the next available team member. May I have your name?",
      { widget: "messageParser", withAvatar: false }
    );

    this.addMessageToBotState(messages);
  };

  handleActionProviderDocs = () => {
    const messages = [
      this.createChatBotMessage(
        "Hi there, I'd like to connect you to the next available team member. May I have your name?",
        { widget: "actionProviderDocs"}
      ),
    ];

    this.addMessageToBotState(messages);
  };

  handleConfigDocs = () => {
    const messages = this.createChatBotMessage(
      "Hi there, I'd like to connect you to the next available team member. May I have your name?",
      { widget: "config"}
    );

    this.addMessageToBotState(messages);
  };

  handleWidgetDocs = () => {
    const messages = this.createChatBotMessage(
      "Hi there, I'd like to connect you to the next available team member. May I have your name?",
      { widget: "widget"}
    );

    this.addMessageToBotState(messages);
  };

  handleDefault = () => {
    const message = this.createChatBotMessage(
      "How can I help? Here is our incentives this month.",
      {
    
        widget: "overview",
      }
    );

    this.addMessageToBotState(message);
  };

  addMessageToBotState = (messages, newState) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, ...messages],
        gist: "",
        infoBox: "",
      }));
    } else {
      this.setState((state) => ({
        ...state,
        ...newState,
        messages: [...state.messages, messages],
        gist: "",
        infoBox: "",
      }));
    }
  };
}

export default ActionProvider;
