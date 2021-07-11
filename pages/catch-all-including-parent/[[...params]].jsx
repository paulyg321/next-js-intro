/*
    NOTE: Because our filename has [[ ... ]] (2 square brackets & the ellipses) 
    it means our component will be rendered as the root route /catch-all-including-parent
    as well as for all other paths after -  /catch-all-including-parent/2/3
*/

import React from "react";
// the useRouter hook allows us to access the router & use it to access our url params
import {useRouter} from 'next/router'

const Page = () => {

    const router = useRouter();

    // 'params' is called params because that's what's between the square braces in our file name
    // the ... indicates that we want this page to be rendered for all routes under /lazy-routing/1/2 - we can access 1 & 2
    const {params} = router.query;

    return <div>{`Notes ${params}`}</div>
}

export default Page;
