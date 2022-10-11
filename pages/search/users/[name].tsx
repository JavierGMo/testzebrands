import { UsersRequest } from "classes/request/UsersRequest";
import { BaseLayout } from "components/layout/BaseLayout";
import { InferGetServerSidePropsType } from "next";

export default function UserByName() {
    return (
        <BaseLayout
        >
            
        </BaseLayout>
    );
}

export async function getServerSideProps(context: {
    query: {name: string;}
}) {
    const { query: {name} } = context;

    const requestUser = new UsersRequest();

    const {data, statusRequest, error} = await requestUser.getUserByQueryParam(`user:${name}`);

    

    return {
        props: {
            error: error??'',
            statusCode: statusRequest,

        }
    };
}