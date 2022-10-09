import { BasicCard } from "components/cards/BasicCard";
import { OwnerInformation } from "components/information/OwnerInformation";
import { SearchLayout } from "components/layout/SearchLayout";

const a = [
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
];

const opt = [
    {
        value: 'string',
        text: 'string',
    },
    {
        value: 'string',
        text: 'string',
    },
    {
        value: 'string',
        text: 'string',
    },
];

export default function SearchRepositories(){
    const hn = (a: string, b: string) => {};
    return (
        <SearchLayout
            optionsForSearch={opt}
            placeholderSearch="Search repositories"
            actionForSearch={hn}
        >
        <div className="columns is-multiline is-centered is-3 is-gapless">
            {
                a.map((item, index)=>{
                    return (
                        <BasicCard
                            typeSearch="Reporsitory"
                            key={index}
                            className="column is-one-quarter is-narrow mx-3 my-2"
                            name={item.name}
                            labelAboutInformation="About"
                            aboutInformation={item.aboutInformation}
                            linkToGitHub={item.linkToGitHub}
                        >
                            <OwnerInformation
                                avatar={item.avatar}
                                linkUserOnGitHub={item.avatar}
                                name={item.name}
                                userNameLogin={item.name}
                            />
                        </BasicCard>
                    )
                })
            }
         </div>
        </SearchLayout>
    );
};