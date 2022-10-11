import { faGithub, faMandalorian } from "@fortawesome/free-brands-svg-icons";
import { faCodeFork, faEye, faHome, faStar } from "@fortawesome/free-solid-svg-icons";
import { RepositoriesRequest } from "classes/request/RepositoriesRequest";
import { CircleAvatar } from "components/avatars/CircleAvatar";
import { TextWithIcon } from "components/information/TextWithIcon";
import { BaseLayout } from "components/layout/BaseLayout";
import { LinkWithIcon } from "components/links/LinkWithIcon";
import { useState } from "react";
import { OwnerRepository, RepositoryDataComplete } from "types/DataFromGitHubTypes";
import { formatBytes, parseDateToString } from "lib/utils/utils"

export default function RepositoryByName(props: {
    data: RepositoryDataComplete,
    contributors: OwnerRepository[]
}) {
    const [repository] = useState(props.data);
    const [contributors] = useState(props.contributors);

    const createdAt = parseDateToString(repository.created_at);
    const updatedAt = parseDateToString(repository.updated_at);
    const pushedAt = parseDateToString(repository.pushed_at);

    const parseBytes = formatBytes(repository.size);
    return (
        <BaseLayout>
            <div className="is-flex-widescreen-only p-3">
                <div className="is-flex-grow-1">
                    <p className="is-size-2 has-text-weight-bold">{repository.name}</p>
                    <p className="is-size-6 mb-3">{repository.full_name}</p>
                    <div className="is-flex is-align-content-center is-align-items-center">
                        <CircleAvatar
                            srcAvatar={repository.owner.avatar_url}
                            altAvatar={repository.owner.login}
                        />
                        <a href={`/search/users/${repository.owner.login}`} className="is-underlined">{repository.owner.login}</a>
                    </div>
                    <p>Created at: {createdAt}</p>
                    <p>Updated at: {updatedAt}</p>
                    <p>Pushed at: {pushedAt}</p>
                    <div className="my-2">
                        <LinkWithIcon
                            className="button"
                            href={repository.html_url}
                            textLink="View on GitHub"
                            trailingIcon={faGithub}
                        />
                    </div>
                    {
                        repository.homepage && <LinkWithIcon
                            className="button"
                            href={repository.homepage}
                            textLink="Home page"
                            trailingIcon={faHome}
                        />
                    }
                    {repository.license && <p className="my-2 is-size-6">License: {repository.license.name}</p>}
                </div>
                <div className="column is-1 divider-vertical"></div>
                <div className="mx-4 is-flex-grow-3">
                    <div className="is-flex my-2">
                        <TextWithIcon colorIcon="has-text-success" text={`Forks: ${repository.forks}`}  trailingIcon={faCodeFork} />
                        <TextWithIcon colorIcon="has-text-warning" text={`Starts: ${repository.stargazers_count}`}  trailingIcon={faStar} />
                        <TextWithIcon colorIcon="has-text-grey-light" text={`Watchers: ${repository.watchers_count}`}  trailingIcon={faEye} />
                    </div>
                    <div className="my-2">
                        <p>About:</p>
                        <p>{repository.description}</p>
                    </div>
                    <p>Principal language: {repository.language}</p>
                    <p>Size: {parseBytes}</p>
                    {
                        repository.topics && <div className="mx-3">
                            <p>Topics:</p>
                            <ul className="menu-list">
                                {repository.topics.map((topic, index)=>(
                                    <li key={index}><TextWithIcon leadingIcon={faMandalorian} text={topic} /></li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div className="my-3 px-5">
                <p className="has-text-weight-bold mb-2">Some Contributors</p>
                <div className="is-flex is-flex-wrap-wrap">
                    {
                        contributors.map((contributor, index)=>(
                            <div key={index} className="m-1">
                                <CircleAvatar
                                    srcAvatar={contributor.avatar_url}
                                    altAvatar={contributor.login}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </BaseLayout>
    );
}

export async function getServerSideProps(context: {
    query: {user: string; name: string;}
}) {
    const { query: { name: repoName, user } } = context;

    const requestRepository = new RepositoriesRequest();
    const { data, error } = await requestRepository.getRepositoryByUserAndRepoName(user, repoName);
    const someContributors = await requestRepository.getSomeContributorsRepo(user, repoName);
    
    if(error || !data || !someContributors.data)
        return {
            redirect: {
                destination: '/search/repositories',
                permanent: false
            },
            props: {
                error: error?error:"Data doesn't exist"
            }
        }
    
    const dataRepository: RepositoryDataComplete = data;
    
    return {
        props: {
            data: dataRepository,
            contributors: someContributors.data
        }
    }
}