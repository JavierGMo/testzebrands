import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { CircleAvatar } from "components/avatars/CircleAvatar";
import { LinkWithIcon } from "components/links/LinkWithIcon";

type UserCardProps = {
    className?: string;
    typeSearch: string;
    userName: string;
    srcAvatar: string;
    linkToGitHub: string;
};

export function UserCard({ className, typeSearch, userName, srcAvatar, linkToGitHub }: UserCardProps) {
    return (
        <div className="card m-2 px-2">
            <div className="card-content">
                <div className="is-2 is-flex is-justify-content-center">
                    <CircleAvatar
                        srcAvatar={srcAvatar}
                        altAvatar={userName}
                    />
                </div>
                <div className="is-5 is-flex is-justify-content-center">
                    <a
                        href={`/search/users/${userName}`}
                        className="is-size-6 has-text-weight-bold truncate-text-w-100px"
                        title={userName}
                    >
                        {userName}
                    </a>
                    
                </div>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item">
                    <LinkWithIcon
                        href={linkToGitHub}
                        textLink="View on GitHub"
                        trailingIcon={faGithub}
                    />
                </p>
            </footer>
        </div>
    );
}