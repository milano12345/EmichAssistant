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
  const [showChatbot, toggleChatbot] = useState(false);
  if(showChatbot === false) {
  setTimeout(() => {toggleChatbot(true) },500)
  }
  return (
    <div className="App">
      <GradientBackground>
        <Menu />
        <img className="logo" alt="logo" src="https://www.carlogos.org/logo/Chevrolet-logo-2013-2560x1440.png" style={{ paddingTop: "40px"}} />
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
      </GradientBackground>
    </div>
  );
}

export default App;
