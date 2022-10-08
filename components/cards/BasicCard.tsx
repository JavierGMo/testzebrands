import { ReactNode } from "react";
import { BasicInformation } from "components/information/BasicInformation";
import { CircleAvatar } from "components/avatars/CircleAvatar";
import { LinkWithIcon } from "components/links/LinkWithIcon";
import { faLink } from '@fortawesome/free-solid-svg-icons'

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

export function BasicCard({
    className,
    typeSearch,
    avatar,
    name,
    labelAboutInformation,
    aboutInformation,
    linkToGitHub,
    children
}: BasicCardProps) {
    return (
        <div className={`box ${className}`}>
            <div className="mt-3">
                <LinkWithIcon
                    className="is-size-4 is-underlined"
                    href={`/search/users/${name}`}
                    underlined
                    textLink={name}
                    trailingIcon={faLink}
                />
            </div>
            <div className="columns px-2">
                { avatar && <div className="column is-3"><CircleAvatar srcAvatar={avatar} altAvatar={name} /></div>}
                <BasicInformation
                    className="column"
                    name={name}
                    labelAboutInformation={labelAboutInformation}
                    aboutInformation={aboutInformation}
                    typeSearch={typeSearch}
                    linkToGitHub={linkToGitHub}
                />
            </div>
            <div className="p-2">
                { children }
            </div>
        </div>
    );
}