import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import useStoryblok from '../hooks/useStoryblok';
import ClientStory from '../lib/client';

import Page from '../components/Page';

const Home: NextPage = ({ story, preview, locale }) => {
    console.log(locale);
    story = useStoryblok(story, preview, locale);

    return (
        <div>
            <Head>
                <title>{story ? story.name : 'My Site'}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <h1>{story ? story.name : 'My Site'}</h1>
            </header>

            <Page blok={story?.content ?? {}} />
        </div>
    );
};

export async function getStaticProps({
    preview = false,
    locale = null,
    locales = [],
}) {
    console.log(locale);

    console.log('boom', locale);
    // home is the default slug for the homepage in Storyblok
    let slug = 'home';

    let { data } = await ClientStory.get(
        `stories/${slug}`,
        {
            language: locale,
        },
        preview
    );

    return {
        props: {
            story: data ? data.story : null,
            preview: preview || false,
            locale,
            locales,
        },
        revalidate: 3600, // revalidate every hour
    };
}

export default Home;
