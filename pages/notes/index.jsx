import React from "react";
// to navigate our app we can use Link (which does client side routing)
// for server side routing or if we want to force a rerender we can use <a> tag
import Link from "next/link";
import { useRouter } from "next/router";

const Page = () => {

    const router = useRouter();
    const id = 12345;

    return (
        <div>
            <h1>Notes Page</h1>
            {/* 
                When routing to a page with [] we have to use the same file name but include the
                "as={}" with the dynamic path we want to use
            */}
            <Link href="/notes/[id]" as={`/notes/123`}>
                <a>
                    Notes 123
                </a>
            </Link>
            <br/>
            <Link href="/notes/[id]" as={`/notes/1234`}>
                <a>
                    Notes 1234
                </a>
            </Link>
            <br/>
            {/* 
                When routing programatically we can access the router.push() method,
                similar to <Link> we have to provide an extra argument when our page has [] in its name
            */}
            <button onClick={e => router.push("/notes/[id]", `/notes/${id}`)}>
                Notes 12345
            </button>
        </div>

    )
}

export default Page;
