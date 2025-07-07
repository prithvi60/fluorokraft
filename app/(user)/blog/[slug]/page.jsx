import { BlogSpecificPage } from '@/components/layout/blog page/BlogSpecificPage';
import { client } from '@/sanity/lib/client';
import { POST_QUERY } from '@/sanity/Queries';

const Page = async ({ params }) => {
    const { slug } = await params
    // console.log(slug);

    const post = await client.fetch(
        POST_QUERY,
        { slug },
        {
            cache: "no-cache",
            next: {
                tags: ["post"],
            },
        }
    );
    // console.log(post);

    return (
        <div>
            <BlogSpecificPage post={post} />
        </div>
    )
}

export default Page
