import { CircleAvatar } from "components/avatars/CircleAvatar";

type RepositoryCardProps = {
    nameRepository: string;
    fullNameRepository: string;
    linkRepositoryToGitHub: string;
    descriptionRepository?: string;
    usernameOwner: string;
    avatarOwner: string;
    showOwner: boolean;
};

export function RepositoryCard({
    nameRepository,
    fullNameRepository,
    linkRepositoryToGitHub,
    descriptionRepository,
    usernameOwner,
    avatarOwner,
    showOwner
}: RepositoryCardProps) {
    return (
        <div className="card m-2 mx-2">
            <header className="card-header">
                <a href={`/search/repositories/${usernameOwner}/${nameRepository}`} className="card-header-title is-underlined">{nameRepository}</a>
            </header>
            <div className="card-content">
                <p className="truncate-text-height">{descriptionRepository}</p>
            </div>
            {
                showOwner && <footer className="card-footer is-flex is-flex-direction-column px-5 py-3">
                    <div className="mb-2"><p className="has-text-weight-bold">Owner</p></div>
                    <div className="is-flex">
                        <CircleAvatar
                            srcAvatar={avatarOwner}
                            altAvatar={usernameOwner}
                            classNameSizeAvatar="is-24x24"
                        />
                        <a href={`/search/users/${usernameOwner}`} className="is-underlined mx-2">{usernameOwner}</a>
                    </div>
                </footer>
            }
        </div>
    );
}