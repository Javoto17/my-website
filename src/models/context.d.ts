import type { NextPageContext } from 'next';
import type { StoryblokComponent } from 'storyblok-js-client';
import type { ParsedUrlQuery } from 'querystring';

export interface Context {
    preview: boolean;
    story?: StoryblokComponent;
    slug: string;
}

export interface PageContext extends NextPageContext, Context {}
