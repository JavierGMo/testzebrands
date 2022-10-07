import { ReactNode } from "react";
import { BasicInformation } from "components/information/BasicInformation";
import { CircleAvatar } from "components/avatars/CircleAvatar";

type BasicCardProps = {
    className?: string;
    typeSearch: string;
    avatar?: string;
    name: string;
    labelAboutInformation?: string;
    aboutInformation?: string;
    linkToGitHub: string;
    children?: ReactNode;
};

export function BasicCard({ className, typeSearch, avatar, name, labelAboutInformation, aboutInformation, linkToGitHub, children }: BasicCardProps) {
    return (
        <div className={`box ${className}`}>
            <p className="is-size-2 px-2">{typeSearch}</p>
            <div className="columns px-2">
                { avatar && <div className="column is-3"><CircleAvatar srcAvatar={avatar} altAvatar={name} /></div>}
                <BasicInformation
                    className="column"
                    name={name}
                    labelAboutInformation={labelAboutInformation}
                    aboutInformation={aboutInformation}
                    linkToGitHub={linkToGitHub}
                />
            </div>
            <div className="p-2">
                { children }
            </div>
        </div>
    );
}