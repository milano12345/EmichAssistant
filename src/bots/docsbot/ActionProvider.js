class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleMessageParserDocs = () => {
    const messages = [this.createChatBotMessage(
      "Here at Emich 1 Chevrolet, we make it easy to get a high value cash offer on your vehicle.",
    ),(
      "We offer two great options, a quick and easy in-person appraisal or an unseen estimate. Which do you prefer?",
      { widget: "messageParser", withAvatar: false }
    )]

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
    const messages = [
      this.createChatBotMessage(
      "We offer two great options, a quick and easy in-person appraisal or an unseen estimate. Which do you prefer?",
      { widget: "trades"}
    ),
      ];

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
