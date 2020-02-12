// Create a dynamic route by adding a new page called [id].js

// This page will handle dynamic routes only for /pages/p/level1 and not for /pages/p/level1/level2

// the id between [] name is the name of the param received by the page
// example: /p/level1 ; the query object will have inside { id: 'level1' }
// this query object can be accessed with useRouter();

import { useRouter } from 'next/router';
import Layout from '../../components/MyLayout';

export default function Post() {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.id}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    );
}