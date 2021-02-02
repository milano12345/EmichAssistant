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

  return (
    <div className="App">
      <GradientBackground>
        <Menu />
        <img src="https://www.goldeagle.com/wp-content/uploads/2018/12/Chevypnglogo-1-1280x720.png" style={{ paddingTop: "40px", height: "150px", width: "150px" }} />
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
