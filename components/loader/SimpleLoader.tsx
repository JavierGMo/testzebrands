import { ReactNode } from "react";

import classes from "styles/loader/SimpleLoader.module.css";

type SimpleLoaderProps = {
    show: boolean;
}

export function SimpleLoader({ show }: SimpleLoaderProps) {
    return (
        <>
            {
                show && <div>
                    <div className={`${classes.backdrop} is-flex is-justify-content-center`}>
                        <div className="is-flex is-justify-content-center is-flex-direction-column">
                            <p className="has-text-centered mb-1 has-text-primary has-text-weight-bold">Loading...</p>
                            <progress className="progress is-small is-primary" max="100">15%</progress>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}