import { LinkWithIcon } from "components/links/LinkWithIcon";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type BasicInformationProps = {
    className: string;
    name: string;
    labelAboutInformation?: string;
    aboutInformation?: string;
    linkToGitHub: string;
};

export function BasicInformation({ className, name, labelAboutInformation, aboutInformation, linkToGitHub }: BasicInformationProps){
    return (
        <div className={className}>
            <p>Name: {name}</p>
            <p>{labelAboutInformation}: {aboutInformation}</p>
            <LinkWithIcon
                    className="has-background-grey-lighter"
                    href={linkToGitHub}
                    textLink={"View on GitHub"}
                    trailingIcon={faGithub}
                />
        </div>
    );
}