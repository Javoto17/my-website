import React from 'react';
import type { StoryblokComponent } from 'storyblok-js-client';

const Components: { [key: string]: React.ElementType } = {};

interface DynamicComponentProps {
    blok: StoryblokComponent<string>;
}

const DynamicComponent = ({ blok }: DynamicComponentProps) => {
    // check if component is defined above
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component];

        return <Component blok={blok} key={blok._uid} />;
    }

    return (
        <p>
            The component <strong>{blok.component}</strong> has not been created
            yet.
        </p>
    );
};

export default DynamicComponent;
