import { ReactNode } from "react";

import styles from 'styles/tooltip/SimpleTooltip.module.css';

type SimpleTooltipProps = {
    children: ReactNode;
    textTooltip: string;
};

export function SimpleTooltip({ children, textTooltip }: SimpleTooltipProps) {
    return (
        <div className={styles.tooltip}>
            {children}
            <span className={styles.tooltiptext}>{textTooltip}</span>
        </div>
    );
}