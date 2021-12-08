import Storyblok from './storyblok';
import type { StoryblokResult } from 'storyblok-js-client';

class Client {
    params: Object = {};
    preview: boolean = false;

    constructor(params: Object, preview: boolean) {
        this.params = params;
        this.preview = preview;
    }

    get = async (
        slug: string,
        params: Object = this.params,
        preview: boolean = this.preview
    ): Promise<StoryblokResult> => {
        try {
            if (preview) {
                this.params = {
                    ...params,
                    version: 'draft',
                    cv: Date.now(),
                };
            }

            let { data, perPage, total, headers } = await Storyblok.get(
                `cdn/${slug}`,
                this.params
            );

            return {
                data,
                perPage,
                total,
                headers,
            };
        } catch (error) {
            console.error(error);
            return {} as StoryblokResult;
        }
    };
}

const ClientStory = new Client(
    {},
    Boolean(process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW)
);

export default ClientStory;
