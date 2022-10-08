import { SearchLayout } from "components/layout/SearchLayout";
import { BasicCard } from "components/cards/BasicCard";

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "store";



const a = [
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" nome;",
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

export default function SearchUsers(){
    const searches = useSelector((state: RootState)=> state.shearches.value);
    const menuOptionSearch = useSelector((state: RootState) => state.menuOptionSearch.value);

    const actionGetUsers = (search: string, typeSearch: string) => {
        console.log('Hola pendejos');
        
    };

    return (
        <SearchLayout
            optionsForSearch={opt}
            placeholderSearch="Search usres"
            actionForSearch={actionGetUsers}
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