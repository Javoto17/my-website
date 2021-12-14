import type { NextPage } from 'next';
import type { PageContext } from '../models/context';
import Head from 'next/head';
import type { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';

import Page from '../components/Page';

import ClientStory from '../lib/client';

import useStoryblok from '../hooks/useStoryblok';

const DynamicPage: NextPage<PageContext> = ({
    story,
    preview = false,
    locale,
}) => {
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
    params,
    preview = false,
    locales = [],
    locale,
}) => {
    const mySlug = params?.slug ?? 'home';

    let path = Array.isArray(mySlug) ? mySlug.join('/') : 'home';

    console.log('path', path);

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
    let data =
        (await ClientStory.getAll('stories', {
            filter_query: {
                component: {
                    in: 'page',
                },
            },
        })) ?? [];

    let paths: any[] = [];

    data.forEach((page) => {
        if (!page || page?.slug === 'home') {
            return;
        }

        // get array for slug because of catch all

        let pathsTranslated =
            page?.translated_slugs?.filter(
                (slug) => locales.indexOf(slug?.path) !== 1
            ) ?? [];

        pathsTranslated.push({
            path: page.full_slug,
            lang: page.lang,
            name: page.slug,
        });

        // // create additional languages
        paths = [
            ...paths,
            ...pathsTranslated.map(({ path, lang }) => ({
                params: { slug: path.split('/') },
                locale: lang,
            })),
        ];
    });

    return {
        paths,
        fallback: false,
    };
};

export default DynamicPage;
