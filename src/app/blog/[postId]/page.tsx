import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'
import getFormattedDate from '@/lib/utils'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { Calendar, Book, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export function generateStaticParams() {
    const posts = getSortedPostsData()
    return posts.map((post) => ({
        postId: post.id
    }))
}

export function generateMetadata({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData()
    const { postId } = params
    const post = posts.find(post => post.id === postId)
    if (!post) {
        return {
            title: 'Post not found'
        }
    }
    return {
        title: post.title,
    }
}

export default async function Post({ params }: { params: { postId: string } }) {
    const posts = getSortedPostsData()
    const { postId } = params
    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, subtitle, date, contentHtml, thumbnail, thumbnailDescription } = await getPostData(postId)
    const pubDate = getFormattedDate(date)

    //Get average read time
    function countWordsInHtml(html: string) {
        return html.replace(/<[^>]+>/g, '').trim().split(/\s+/).length
    }
    const wordCount = countWordsInHtml(contentHtml)
    const readTimeInMinutes = Math.ceil(wordCount / 200)

    return (
        <article className="px-6 pb-16 prose prose-xl prose-strong:text-white prose-strong:font-semibold prose-invert mx-auto mt-20 items-center">
            <header className="text-center flex flex-col">
                <Heading className="mx-auto mb-0 lg:text-center">{title}</Heading>
                <Paragraph>{subtitle}</Paragraph>
                <div className="flex max-w-fit mx-auto items-center pb-2 px-4 rounded-md bg-neutral-800 gap-4 mt-4">
                    <Paragraph size="xs" className='items-center flex gap-2'><Calendar className='h-4 w-4' name='Calendar icon' aria-label='icon' /><time dateTime={date}>{pubDate}</time></Paragraph>
                    <Paragraph size="xs" className='items-center flex gap-2'><Book className='h-4 w-4' name='Book icon' aria-label='icon' /><time dateTime={`P${JSON.stringify(readTimeInMinutes)}M`}>{readTimeInMinutes} min read</time></Paragraph>
                </div>
            </header>
            <section className="mb-10">
                <figure>
                    <Image className='rounded-md' title={thumbnailDescription} src={thumbnail} alt={title} width={1200} height={630} />
                    <figcaption className="text-center text-sm italic">{thumbnailDescription}</figcaption>
                </figure>
                <div className='text-slate-200 text-base lg:text-lg' dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </section>
            <Link href="/blog" aria-label="Back to the main blog page">
                <Paragraph className="flex my-8 hover:underline gap-2" size="sm"><ArrowLeft /> Back to the main blog page</Paragraph>
            </Link>
        </article>
    )
}