// Rendering Child Components - Method 1 - Layout as a Higher Order Component

import withLayout from '../comps/MyLayout';

const Page = () => <p>Hello Next.js</p>;

export default withLayout(Page);