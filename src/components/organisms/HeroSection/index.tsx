import React from 'react';

import Button from '@components/atoms/Button';
import Heading from '@components/atoms/Heading';
import Section from '@components/organisms/Section';

import Animation from './components/Animation';

export interface HeroSectionProps {
    title: string;
    cta: {
        href: string;
        label: string;
    };
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, cta }) => {
    return (
        <Section className="bg-slate-50 grid grid-cols-1 md:grid-cols-2">
            <div className="py-4">
                <Heading className="text-gray-900 text-2xl font-extrabold md:text-6xl">
                    {title}
                </Heading>
            </div>
            <div className="">
                <Animation />
            </div>
        </Section>
    );
};

export default HeroSection;
