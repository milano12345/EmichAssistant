import React from 'react'
import styles from "./widgets/options/Options/Options.module.css";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  dispatchEmail = () => {
    const messages = [this.createChatBotMessage(
      <form method="post"> 
      <input type="button" value="Send Mail"
          onClick={window.sendEmail()} /> 
    </form> 
      //{ widget: "messageParser", withAvatar: false }
    )]

    this.addMessageToBotState(messages);
  };

  handleUnseenEstimate = () => {
    const messages = [this.createChatBotMessage(
      "Please click below and tell us a little about your trade in. Thank you."
      //{ widget: "messageParser", withAvatar: false }
    ),
    this.createChatBotMessage(
      <form action="https://emichchevrolet.formstack.com/forms/unseen_appraisal_form">
    <input type="submit" value="Get an offer" />
</form>
    )]

    this.addMessageToBotState(messages);
  }
  
  handleTradeAppt = () => {
    const messages = [this.createChatBotMessage(
      "We make it easy to get a high-value cash offer on your vehicle."
    ),
    this.createChatBotMessage(
      "Please pick a day to set an appointment. Thank you.",
       { widget: "apptPicker", withAvatar: false }
    )]

    this.addMessageToBotState(messages);
  };

  handleMessageParserDocs = () => {
    const messages = [this.createChatBotMessage(
      "We make it easy to get a high value cash offer on your vehicle.",
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
