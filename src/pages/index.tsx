import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useStoryblok } from '../hooks/useStoryblok';
import ClientStory from '../lib/client';

const Home: NextPage = ({ story, preview }) => {
    story = useStoryblok(story, true);

    return <div className="bg-black text-white">hello</div>;
};

export async function getStaticProps({ preview = false }) {
    // home is the default slug for the homepage in Storyblok
    let slug = 'home';

    let { data } = await ClientStory.get(slug, {}, true);

    return {
        props: {
            story: data ? data.story : null,
            preview,
        },
        revalidate: 3600, // revalidate every hour
    };
}

export default Home;
