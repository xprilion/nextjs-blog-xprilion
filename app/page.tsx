import BioSection from "@/components/home/bio-section";
import {getAllPosts} from "@/lib/posts";
import NextLink from "next/link";
import {FiArrowRight} from "react-icons/fi";


export default async function Home() {

    const posts = await getAllPosts();

  return (
      <>
          <BioSection />
          <hr className={"hr-full"} />
          {posts.slice(0, 3).map((post) => (
              <div key={post.slug}>
                  <NextLink href={`/posts/${post.slug}`}>
                      {post.metadata.title}
                  </NextLink>
              </div>
          ))}
          {
              posts.length > 3 && (
                  <NextLink role={"button"} href={"/posts"}>More <FiArrowRight /></NextLink>
              )
          }
      </>
  )
}
