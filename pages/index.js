// Add multiple links that use the new dynamic router
import Layout from '../components/MyLayout';
import Link from 'next/link';

// in the Link element, the href is prop is now path of the page in pages and "as" is the beautified URL in the browser
const PostLink = props => (
    <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
    </Link>
    </li>
);
export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>
    );
}