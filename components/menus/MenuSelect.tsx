import { ChangeEvent } from "react";

export type ItemMenu = {
    value: string;
    text: string;
}

// ChangeEventHandler<HTMLSelectElement>

type MenuSelectProps = {
    className?: string;
    initialText?: string
    options: Array<ItemMenu>;
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}



export function MenuSelect({ className, initialText, options, onChange, value }: MenuSelectProps) {

    return (
        <div className={`select ${className}`}>
            <select
                value={value}
                onChange={onChange}
            >
                <option value="">{ initialText??'Select a filter' }</option>
                {
                    options.map((option, index)=>(
                            <option key={index} value={option.value}>{option.text}</option>
                        )
                    )
                }
            </select>
        </div>
    );
}