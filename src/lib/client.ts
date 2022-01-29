import Storyblok from './storyblok';
import type {
    StoriesParams,
    Stories,
    StoryData,
    StoryblokResult,
} from 'storyblok-js-client';

class Client {
    params: StoriesParams = {};
    preview: boolean = false;

    constructor(params: Object, preview: boolean) {
        this.params = params;
        this.preview = preview;
    }

    get = async (
        slug: string,
        params: StoriesParams = this.params,
        preview: boolean = this.preview
    ): Promise<StoryblokResult> => {
        try {
            const previewMode = this.preview || preview;

            if (previewMode) {
                this.params = {
                    ...params,
                    version: 'draft',
                    cv: Date.now(),
                };
            }

            const res = await Storyblok.get(`cdn/${slug}`, this.params);
            console.log(res);

            const { data, perPage, total, headers } = res;

            return {
                data,
                perPage,
                total,
                headers,
            };
        } catch (error) {
            // console.error(error);
            return {} as Stories;
        }
    };

    getAll = async (
        path: string,
        params: StoriesParams = this.params,
        preview: boolean = this.preview
    ): Promise<StoryData[] | undefined> => {
        try {
            const previewMode = this.preview || preview;

            if (previewMode) {
                this.params = {
                    ...params,
                    version: 'draft',
                    cv: Date.now(),
                };
            }

            const res = await Storyblok.getAll(`cdn/${path}`, this.params);

            return res;
        } catch (error) {
            // console.error(error);
            return [];
        }
    };
}

const ClientStory = new Client(
    {},
    process.env.NEXT_PUBLIC_STORYBLOK_PREVIEW === '1'
);

export default ClientStory;
