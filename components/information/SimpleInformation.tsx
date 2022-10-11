import classes from "styles/information/SimpleInformation.module.css";

type SimpleInformationProps = {
    label: string;
    text: string;
};

export function SimpleInformation({ label, text }: SimpleInformationProps) {
    return (
        <label htmlFor="inp" className={classes.inp}>
            <textarea id="inp" placeholder="&nbsp;" value={text} />
            <span className={classes.label}>{label}</span>
            <span className={classes.focusbg}></span>
        </label>
    );
}