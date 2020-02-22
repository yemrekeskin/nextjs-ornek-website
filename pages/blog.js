import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

function Blog() {
    return (
        <Layout>
            <Head>
                <title> Blog </title>
            </Head>

            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>

        </Layout>
    );
}

export default Blog
