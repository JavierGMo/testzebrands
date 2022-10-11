import { CircleAvatar } from "components/avatars/CircleAvatar";
import { LinkWithIcon } from "components/links/LinkWithIcon";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

type OwnerInformationProps = {
    avatar: string;
    name: string;
    userNameLogin: string;
    linkUserOnGitHub: string;
};

const dividerStyle = {
    borderTop: '1px solid hsl(0, 0%, 71%)'
};

export function OwnerInformation({ avatar, name, userNameLogin, linkUserOnGitHub }: OwnerInformationProps) {

    return (
        <div>
            <div style={dividerStyle}></div>
            <p className="is-size-4">Owner</p>
            <div className="columns">
                <div className="column is-3">
                    <CircleAvatar
                        srcAvatar={avatar}
                        altAvatar={name}
                    />
                </div>
                <div className="column">
                    <p>Name: {name}</p>
                    <p>Username: {userNameLogin}</p>
                    <LinkWithIcon
                        className="button has-background-grey-lighter"
                        href={linkUserOnGitHub}
                        textLink="View profile on GitHub"
                        trailingIcon={faGithub}
                    />
                </div>
            </div>
        </div>
    );
}