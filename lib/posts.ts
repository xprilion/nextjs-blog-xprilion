import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from "rehype-highlight";


interface Post {
    slug: string;
    mdxSource: MDXRemoteSerializeResult;
    metadata: {
        [key: string]: any;
    };
}

const postsDirectory = path.join(process.cwd(), 'posts');
const pagesDirectory = path.join(process.cwd(), 'pages');

export function getPostSlugs() {
    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => path.parse(filename).name);
}

export async function getPostBySlug(slug: string, type: string ="posts"): Promise<Post> {
    let directory = "posts";
    if(type === "pages"){
        directory = "pages"
    }
    const fullPath = path.join(directory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const { data, content } = matter(fileContents);

    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight]
        },

    });

    return {
        slug,
        mdxSource,
        metadata: data,
    };
}

export async function getAllPosts(): Promise<Post[]> {
    const slugs = getPostSlugs();
    const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug, "posts")));

    // Sort posts by date
    posts.sort((post1, post2) => {
        const date1 = new Date(post1.metadata.date);
        const date2 = new Date(post2.metadata.date);

        // Sort in descending order (most recent first)
        return date2.getTime() - date1.getTime();
    });

    return posts;
}