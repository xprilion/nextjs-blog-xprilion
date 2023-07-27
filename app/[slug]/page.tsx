import { getPostBySlug } from '@/lib/posts';
import PostData from "@/components/posts/post-data";

interface Params {
    params: {
        slug: string;
    };
}

export default async function PostPage ({params}: Params) {

    const post = await getPostBySlug(params.slug, "pages");

    return (
        <div>
            <h1>{post.metadata.title}</h1>
            <PostData postMdx={post.mdxSource} />
        </div>
    );
};