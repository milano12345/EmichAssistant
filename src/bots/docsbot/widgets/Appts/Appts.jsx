import React from "react";
import { FadeIn } from "react-anim-kit";

import { ReactComponent as OverviewSVG } from "../../../../assets/img/bot-overview.svg";

import styles from "./Appts.css";
import ApptOptions from "../options/ApptOptions/ApptOptions";

const Trades = (props) => {
    return (
        <div className={styles.overview}>
            <FadeIn left by={250}>
            </FadeIn>

            <ApptOptions actionProvider={props.actionProvider} />
        </div>
    );
};

export default Trades;
