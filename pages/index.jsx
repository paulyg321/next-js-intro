import React from "react";
// to navigate our app we can use Link (which does client side routing)
// for server side routing or if we want to force a rerender we can use <a> tag
import Link from "next/link";
import router from "next/router";

const Page = () => {
    return (
        <div>
            <h1>Index Page</h1>
            <Link href="/notes">
                <a>
                    Notes
                </a>
            </Link>
            <br/>
            <button onClick={e => router.push("/notes")}>
                Go to Notes
            </button>
        </div>

    )
}

export default Page;
