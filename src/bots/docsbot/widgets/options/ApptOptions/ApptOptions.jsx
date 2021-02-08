import React from "react";
import Options from "../Options/Options";

const TradeOptions = (props) => {
    console.log('props', props)
    const options = [
        {
            //name: "messageparser",
            name: "Sunday",
            handler: props.actionProvider.dispatchEmail,
            id: 1,
        },
        {
            //name: "config",
            name: "Monday",
            handler: props.actionProvider.handleUnseenEstimate,
            id: 2,
        },
        {
            //name: "messageparser",
            name: "Tuesday",
            handler: props.actionProvider.handleTradeAppt,
            id: 3,
        },
        {
            //name: "config",
            name: "Wednesday",
            handler: props.actionProvider.handleUnseenEstimate,
            id: 4,
        },
        {
            //name: "config",
            name: "Thursday",
            handler: props.actionProvider.handleUnseenEstimate,
            id: 5,
        },
        {
            //name: "messageparser",
            name: "Friday",
            handler: props.actionProvider.handleTradeAppt,
            id: 6,
        },
        {
            //name: "config",
            name: "Saturday",
            handler: props.actionProvider.handleUnseenEstimate,
            id: 7,
        },
        // {
        //   //name: "actionprovider",
        //   name: "Questions",
        //   handler: props.actionProvider.handleActionProviderDocs,
        //   id: 3,
        // },
        // {
        //   //name: "widgets",
        //   name: "Test Drive",
        //   handler: props.actionProvider.handleWidgetDocs,
        //   id: 5,
        // },
    ];

    return <Options options={options} />;
};

export default TradeOptions;