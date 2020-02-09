// Rendering Child Components - Method 2 - Page content as a prop

import Layout from '../components/MyLayout.js';

const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
    return <Layout content={indexPageContent} />;
}