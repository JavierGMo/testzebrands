import { FormEvent, KeyboardEvent } from 'react';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { GenericIcon } from 'components/icons/GenericIcon';

type OnChangeInputTextType = {
    (event: FormEvent<HTMLInputElement>): void
};

type OnKeyUpInputType = {
    (event: FormEvent<HTMLInputElement>): void
};

type InputWithIconProps = {
    className?: string;
    leadingIcon?: IconDefinition,
    trailingIcon?: IconDefinition
    label: string;
    placeholder?: string;
    value: string;
    onChange: OnChangeInputTextType,
    onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void
};

export function InputTextWithIcon({
    leadingIcon,
    trailingIcon,
    placeholder,
    value,
    onChange,
    onKeyUp,
    
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
                    onKeyUp={onKeyUp}
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