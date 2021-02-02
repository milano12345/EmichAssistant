import React from "react";
import Options from "../Options/Options";

const GeneralOptions = (props) => {
  const options = [
    {
      //name: "messageparser",
      name: "Availability",
      handler: props.actionProvider.handleMessageParserDocs,
      id: 1,
    },
    {
      //name: "config",
      name: "Trades",
      handler: props.actionProvider.handleConfigDocs,
      id: 2,
    },
    {
      //name: "actionprovider",
      name: "Questions",
      handler: props.actionProvider.handleActionProviderDocs,
      id: 3,
    },
    {
      //name: "widgets",
      name: "Test Drive",
      handler: props.actionProvider.handleWidgetDocs,
      id: 5,
    },
  ];

  return <Options options={options} />;
};

export default GeneralOptions;
