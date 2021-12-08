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
        preview: boolean = false
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
                `cdn/stories/${slug}`,
                params
            );

            return {
                data,
                perPage,
                total,
                headers,
            };
        } catch (error) {
            console.log(error);
            return {} as StoryblokResult;
        }
    };
}

const ClientStory = new Client({}, Boolean(process.env.NEXT_STORYBLOK_PREIEW));

export default ClientStory;
