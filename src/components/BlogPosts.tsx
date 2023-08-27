import { getSortedPostsData } from "@/lib/posts"
import Link from "next/link"
import getFormattedDate from "@/lib/utils"
import { Roboto_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import Image from "next/image"

const mono = Roboto_Mono({ subsets: ["latin"] })

export default function BlogPosts() {
    const posts = getSortedPostsData()
    return (
        <section className="text-white animate-fade-right">
            {posts.map((post, index) => (
                <Link className="animate-fade-right" style={{ animationDelay: `${0.15 * index}s`, animationFillMode: "backwards" }} key={post.id} href={`/blog/${post.id}`}>
                    <article className="w-full flex gap-8 py-5 border-b  hover:border-neutral-300 transition duration-300 ease-in-out border-neutral-800">
                        <Image src={post.thumbnail} alt={post.title} width={150} height={100} className="rounded-md" />
                        <div className="my-auto">
                            <h2 className="text-white w-full">{post.title}</h2>
                            <h3><time dateTime={post.date} className={cn('text-[#737373]', mono.className)}>{getFormattedDate(post.date)}</time></h3>
                        </div>
                    </article>
                </Link>
            ))}
        </section>

    )
}