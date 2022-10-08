import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

type LinkWithIconProps = {
    className?: string;
    underlined?: boolean;
    leadingIcon?: IconDefinition;
    trailingIcon?: IconDefinition;
    textLink: string;
    href: string;
};

export function LinkWithIcon({ className, leadingIcon, trailingIcon, underlined, textLink, href }: LinkWithIconProps) {
    return (
        <a href={href} className={`py-1 pl-3 ${className}`}>
            <span className={`icon-text pr-1 ${underlined && 'is-underlined'}`}>
                { leadingIcon && <span className='icon'><FontAwesomeIcon icon={leadingIcon as IconDefinition} /></span> }
                <span>{textLink}</span>
                {  trailingIcon && <span className='icon'><FontAwesomeIcon icon={trailingIcon as IconDefinition} /></span> }
            </span>
        </a>
    );
}