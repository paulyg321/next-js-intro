import React from "react";
// the useRouter hook allows us to access the router & use it to access our url params
import {useRouter} from 'next/router'

const Page = () => {

    const router = useRouter();

    // 'id' is called id because that's what's between the square braces in our file name
    const {id} = router.query;

    return <div>{`Notes ${id}`}</div>
}

export default Page;
