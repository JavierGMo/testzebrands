import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

type TextWithIconProps = {
    className?: string;
    colorIcon?: string;
    text: string;
    leadingIcon?: IconDefinition;
    trailingIcon?: IconDefinition;
};

export function TextWithIcon({ className, colorIcon, text, leadingIcon, trailingIcon }: TextWithIconProps) {
    return (
        <span className={`icon-text px-1 ${className}`}>
            { leadingIcon && <span className={`icon ${colorIcon}`}><FontAwesomeIcon icon={leadingIcon as IconDefinition} /></span> }
            <span>{text}</span>
            {  trailingIcon && <span className={`icon ${colorIcon}`}><FontAwesomeIcon icon={trailingIcon as IconDefinition} /></span> }
        </span>
    );
}