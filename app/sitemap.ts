import { getAllPosts } from "@/lib/posts";

const URL = "https://xprilion.com";

export default async function sitemap() {
    const posts = await getAllPosts()

    const posts_list = posts.map(({ slug, metadata }) => {
        return ({
            url: `${URL}/posts/${slug}`,
            lastModified: metadata.date,
        })
    });

    const routes = ["", "/talks", "/publications"].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    return [...routes, ...posts_list];
}
