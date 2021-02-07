import React, { useEffect } from "react";
import { ConditionallyRender } from "react-util-kit";
import TradeOptions from "../../options/TradeOptions/TradeOptions"

import GistContainer from "../../GistContainer/GistContainer";

import styles from "./Config.module.css";

const Config = ({ gist, setState, props }) => {
  useEffect(() => {
    setState((state) => ({ ...state, gist: "config" }));
  }, [setState]);

  const showActionProviderGist = gist === "config";
  console.log('props', props)

  return (
    <div>
      {/* <TradeOptions actionProvider={props.actionProvider} /> */}
      <ConditionallyRender
        ifTrue={showActionProviderGist}
        show={<GistContainer gistId="af04e2e30407671412af08fa3c429409" />}
      />
    </div>
  );
};

export default Config;
