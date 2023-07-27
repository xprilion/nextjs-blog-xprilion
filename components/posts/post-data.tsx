"use client";

import {MDXRemote} from "next-mdx-remote";

export default function PostData ({postMdx}: {postMdx: any}) {
    return (
        <MDXRemote {...postMdx} />
    )
}