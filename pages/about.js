// Rendering Child Components - Method 1 - Layout as a Higher Order Component

import withLayout from '../comps/MyLayout';

const Page = () => <p>This is the about page</p>;

export default withLayout(Page);