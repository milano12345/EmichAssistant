import React from "react";
import { FadeIn } from "react-anim-kit";

import { ReactComponent as OverviewSVG } from "../../../../assets/img/bot-overview.svg";

import styles from "./Trades.module.css";
import TradeOptions from "../options/TradeOptions/TradeOptions";

const Trades = (props) => {
    return (
        <div className={styles.overview}>
            <FadeIn left by={250}>
            </FadeIn>

            <TradeOptions actionProvider={props.actionProvider} />
        </div>
    );
};

export default Trades;
