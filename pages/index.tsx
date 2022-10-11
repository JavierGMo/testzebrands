import { RepositoriesRequest } from 'classes/request/RepositoriesRequest'
import { RepositoryCard } from 'components/cards/RepositoryCard'
import { BaseLayout } from 'components/layout/BaseLayout'
import type { InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { ItemRepository } from 'types/DataFromGitHubTypes'

//NextPage

function Home ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <BaseLayout>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='is-flex is-justify-content-center'>
        <p className='is-size-3'>Some repositories randoms</p>
      </div>
      <div className="columns is-multiline is-centered is-desktop is-3">
          {
            data && data?.map((repository, index)=>(
              <div key={index} className="column is-multiline is-centered is-3 mr-4">
                <RepositoryCard
                  avatarOwner={repository.owner.avatar_url}
                  fullNameRepository={repository.full_name}
                  linkRepositoryToGitHub={repository.html_url}
                  nameRepository={repository.name}
                  usernameOwner={repository.owner.login}
                  descriptionRepository={repository.description}
                  showOwner={true}
                />
              </div>
            ))
          }
      </div>
    </BaseLayout>
  )
}

export default Home


export async function getServerSideProps() {

  const requestRepositories = new RepositoriesRequest();

  const data: Array<ItemRepository> = [];

  try {
    const randomRepositories = await requestRepositories.getRepositoriesByNameTechnologyRandom();
    if(randomRepositories) {
      data.push(...randomRepositories);
    }
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      data
    }, // will be passed to the page component as props
  }
}
