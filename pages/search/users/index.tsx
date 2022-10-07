import { SearchLayout } from "components/layout/SearchLayout";
import { BasicCard } from "components/cards/BasicCard";

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

export default function SearchUsers(){
    return (
        <SearchLayout
            placeholderSearch="Search usres"
        >
            <div className="columns is-multiline is-centered is-3 is-gapless">
                {
                    a.map((item, index)=>{
                        return (
                            <BasicCard
                                typeSearch="User"
                                key={index}
                                avatar={item.avatar}
                                className="column is-one-quarter is-narrow mx-3 my-2"
                                name={item.name}
                                labelAboutInformation="Bio"
                                aboutInformation={item.aboutInformation}
                                linkToGitHub={item.linkToGitHub}
                            >
                            </BasicCard>
                        )
                    })
                }
            </div>
        </SearchLayout>
    );
};