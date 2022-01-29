import type { StoryblokComponent } from 'storyblok-js-client';

import DynamicComponent from './DynamicComponent';

interface PageProps {
    blok: StoryblokComponent<string> & {
        body: StoryblokComponent<string>[];
    };
}

const Page = ({ blok }: PageProps) => {
    return (
        <main>
            {blok?.body
                ? blok.body.map((blok) => (
                      <DynamicComponent blok={blok} key={blok._uid} />
                  ))
                : null}
        </main>
    );
};

export default Page;
