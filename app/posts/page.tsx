import NextLink from 'next/link';
import {getAllPosts} from "@/lib/posts";

export default async function PostsList() {

    const posts = await getAllPosts();

    return (
        <div>
            <h1>Posts</h1>
            {posts.map((post) => (
                <div key={post.slug}>
                    <NextLink href={`/posts/${post.slug}`}>
                        {post.metadata.title}
                    </NextLink>
                </div>
            ))}
        </div>
    );
}
