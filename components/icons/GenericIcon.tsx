import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

type GenericIconProps = {
    className: string;
    icon: IconDefinition;
};

/**
 * This component has className 'icon' for that this will be used with classes for any case
 */

export function GenericIcon({ className, icon }: GenericIconProps) {
    return (
        <span className={`icon ${className}`}>
            <FontAwesomeIcon icon={icon as IconDefinition} />
        </span>
    );
}