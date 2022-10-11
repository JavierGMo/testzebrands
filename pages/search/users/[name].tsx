import { UsersRequest } from "classes/request/UsersRequest";
import { CircleAvatar } from "components/avatars/CircleAvatar";
import { BaseLayout } from "components/layout/BaseLayout";

import { useState } from "react";
import { ItemRepository, UserDataComplete } from "types/DataFromGitHubTypes";

import { LinkWithIcon } from "components/links/LinkWithIcon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { parseDateToString } from "lib/utils/utils";
import { SimpleTag } from "components/tags/SimpleTag";
import { RepositoryCard } from "components/cards/RepositoryCard";

function UserByName( props: {
    data: UserDataComplete,
    someRepos: ItemRepository[]
}) {
    const [user] = useState<UserDataComplete>(props.data);
    const [someRepos] = useState<Array<ItemRepository>>(props.someRepos)

    const created = parseDateToString(user.created_at);
    const update = parseDateToString(user.updated_at);
    return (
        <BaseLayout
        >
            <div className="columns py-1 px-3 mt-1">
               <div className="column is-3">
                    <div className="mb-3">
                        <CircleAvatar
                            classNameSizeAvatar="is-128x128"
                            srcAvatar={user.avatar_url}
                            altAvatar={user.name}
                        />
                        <p className="is-size-6 has-text-weight-semibold mt-3">{user.name}</p>
                        <p className="is-size-7 mb-2">{user.login}</p>
                    </div>
                    <div className="mb-2">
                        <p>Bio:</p>
                        <p>{user.bio}</p>
                    </div>
                    <div className="mb-2">
                        <p>Location:</p>
                        <p>{user.location}</p>
                    </div>
                    <div className="mb-2">
                        <p>Company:</p>
                        <p>{user.company}</p>
                    </div>
                    <LinkWithIcon
                        className="button my-2"
                        href={user.html_url}
                        textLink="View on GitHub"
                        trailingIcon={faGithub}
                    />
               </div>
               <div className="column is-1 divider-vertical"></div>
               <div className="column is-7">
                <div>
                    <p className="is-size-2 has-text-weight-bold">{user.name}</p>
                    <p className="is-size-5 mb-2">{user.login}</p>
                    <SimpleTag shortTextTag={user.type} colorTag="is-link" />
                    <p className="my-1">Create: {created}</p>
                    <p>Last update: {update}</p>
                    <div className="columns my-2">
                        <div className="column">Public repos: {user.public_repos}</div>
                        <div className="column is-1 divider-vertical"></div>
                        <div className="column">Followers: {user.followers}</div>
                        <div className="column is-1 divider-vertical"></div>
                        <div className="column">Following: {user.following}</div>
                    </div>
                </div>
                <div>
                    <p className="is-size-4 has-text-weight-semibold">Some repos</p>
                    <div className="columns is-multiline is-centered">
                        {
                            someRepos && someRepos?.map((repo, index)=>(
                                <div key={index} className="column columns is-multiline is-centered is-3 is-gapless">
                                    <RepositoryCard
                                        nameRepository={repo.name}
                                        fullNameRepository={repo.full_name}
                                        linkRepositoryToGitHub={repo.html_url}
                                        descriptionRepository={repo.description}
                                        avatarOwner={repo.owner.avatar_url}
                                        usernameOwner={repo.owner.login}
                                        showOwner={false}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
               </div>
            </div>
            
        </BaseLayout>
    );
}

export default UserByName;

export async function getServerSideProps(context: {
    query: {name: string;}
}) {
    const { query: {name} } = context;

    const requestUser = new UsersRequest();
    
    const {data, error} = await requestUser.getUserByLogin(name);
    const someRepos = await requestUser.getSomeReposOfSpeficUser(name);

    if(error || !data || !someRepos.data)
        return {
            redirect: {
                destination: '/search/users',
                permanent: false
            },
            props: {
                error: error?error:"Data doesn't exist"
            }
        }
        
    const dataUser: UserDataComplete = data;    
    return {
        props: {
            data: dataUser,
            someRepos: someRepos.data
        }
    };
}