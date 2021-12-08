import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import type { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

import Page from '../components/Page';

import ClientStory from '../lib/client';

import useStoryblok from '../hooks/useStoryblok';

const DynamicPage: NextPage = ({ story, preview = false, locale }) => {
    // we only initialize the visual editor if we're in preview mode
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

            <Page blok={story.content} />
        </div>
    );
};

export const getStaticProps: GetStaticProps = async ({
    slug = '',
    preview = false,
    locales = [],
    locale = null,
}) => {
    let path = slug ? slug.join('/') : 'home';

    let { data } = await ClientStory.get(
        `stories/${path}`,
        {
            language: locale,
        },
        preview
    );

    return {
        props: {
            story: data ? data.story : false,
            preview: preview || false,
            locale,
            locales,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async ({ locales = [] }) => {
    // get all links from Storyblok
    let { data } = await ClientStory.get('links/');

    let paths: any[] = [];

    Object.keys(data.links).forEach((linkKey) => {
        if (
            data.links[linkKey].is_folder ||
            data.links[linkKey].slug === 'home'
        ) {
            return;
        }

        // get array for slug because of catch all
        const slug = data.links[linkKey].slug;
        let splittedSlug = slug.split('/');
        if (slug === 'home') splittedSlug = false;

        // create additional languages
        for (const locale of locales) {
            paths.push({ params: { slug: splittedSlug }, locale });
        }
    });

    return {
        paths: paths,
        fallback: false,
    };
};

export default DynamicPage;
