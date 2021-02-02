import React, { useEffect } from "react";
import { FadeIn } from "react-anim-kit";
import { ConditionallyRender } from "react-util-kit";
import Gist from "react-gist";

import { ReactComponent as ActionProviderOverview } from "../../../../../assets/img/actionprovider-overview.svg";

import styles from "./ActionProviderDocs.module.css";
import InformationBox from "../../InformationBox/InformationBox";

const ActionProviderDocs = ({ infoBox, setState }) => {
  useEffect(() => {
    setState((state) => ({
      ...state,
      infoBox: "actionProvider",
    }));
  }, [setState]);

  const showActionProviderInfoBox = infoBox === "actionProvider";

  return (
    <div>
      <FadeIn left by={250}>
      </FadeIn>
      {/* 
      <ConditionallyRender
        ifTrue={showActionProviderInfoBox}
        show={
          <InformationBox setState={setState}>
            <p className={styles.infoBoxParagraph}>
             
            </p>
            <p className={styles.infoBoxParagraph}>
              The bots response is controlled by the createChatBotMessage
              function that is given to the actionprovider:
            </p>
            <Gist id={"2f0855a6fe8908bddc9f03db31d5caa4"} />
          </InformationBox>
        }
      /> */}
    </div>
  );
};

export default ActionProviderDocs;
