import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";

import GradientBackground from "./components/GradientBackground/GradientBackground";
import Menu from "./components/Menu/Menu";
import { ReactComponent as ButtonIcon } from "./assets/icons/robot.svg";

import config from "./bots/docsbot/config";
import MessageParser from "./bots/docsbot/MessageParser";
import ActionProvider from "./bots/docsbot/ActionProvider";

import "./App.css";


function App() {
  const [showChatbot, toggleChatbot] = useState(true);
  // if(showChatbot === false) {
  // setTimeout(() => {toggleChatbot(true) },500)
  // }
  return (
    <div className="App">

        <Menu />
        <div className="logo1" style={{ paddingTop: "40px"}} />
        <h1 className="app-header">Emich Chevrolet Live Chat</h1>
        <div className="app-npm-install">Ask me a question!</div>
        <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>
    </div>
  );
}

export default App;
