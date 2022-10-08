import { LinkWithIcon } from "components/links/LinkWithIcon";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type BasicInformationProps = {
    className: string;
    name: string;
    labelAboutInformation?: string;
    aboutInformation?: string;
    typeSearch: string;
    linkToGitHub: string;
};

export function BasicInformation({
        className,
        name,
        labelAboutInformation,
        aboutInformation,
        typeSearch,
        linkToGitHub
}: BasicInformationProps){
    return (
        <div className={className}>
            <div className="mb-2">
                <p>Name: {name}</p>
                <p>{labelAboutInformation}: {aboutInformation}</p>
                <p>Type: {typeSearch}</p>
            </div>
            <LinkWithIcon
                    className="button has-background-grey-lighter"
                    href={linkToGitHub}
                    textLink={"View on GitHub"}
                    trailingIcon={faGithub}
                />
        </div>
    );
}