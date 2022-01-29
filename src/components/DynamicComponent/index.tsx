import type { StoryblokComponent } from 'storyblok-js-client';

import HeroSection from '../organisms/HeroSection';

const Components: { [key: string]: React.ElementType } = {
    HeroSection: HeroSection,
};

interface DynamicComponentProps {
    blok: StoryblokComponent<string>;
}

const DynamicComponent = ({ blok }: DynamicComponentProps) => {
    // check if component is defined above
    if (typeof Components[blok.component] !== 'undefined') {
        const Component = Components[blok.component];

        return <Component {...blok} key={blok._uid} />;
    }

    return (
        <p>
            The component <strong>{blok.component}</strong> has not been created
            yet.
        </p>
    );
};

export default DynamicComponent;
