import { FormEvent } from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { GenericIcon } from 'components/icons/GenericIcon';

type OnChangeInputTextType = {
    (event: FormEvent<HTMLInputElement>): void
};

type InputWithIconProps = {
    className?: string;
    leadingIcon?: IconDefinition,
    trailingIcon?: IconDefinition
    label: string;
    placeholder?: string;
    value: string;
    onChange: OnChangeInputTextType
};

export function InputTextWithIcon({
    className,
    leadingIcon,
    trailingIcon,
    placeholder,
    value,
    onChange
    
}: InputWithIconProps) {
    return (
        <div className="field">
            <div className="control has-icons-left has-icons-right">
                <input
                    className="input is-success"
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {
                    leadingIcon && <GenericIcon
                        className='is-small is-right'
                        icon={leadingIcon}
                    />
                }
                {
                    trailingIcon && <GenericIcon
                        className='is-small is-right'
                        icon={trailingIcon}
                    />
                }
            </div>
        </div>
    );
}