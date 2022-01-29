import { Meta, Story } from '@storybook/react';

import HeroSection from '../components/organisms/HeroSection';
import type { HeroSectionProps } from '../components/organisms/HeroSection';

const defaultHeroSection: HeroSectionProps = {
    title: 'Organise projects. Get more done.',
};

export default {
    title: 'my-website/organisms/HeroSection',
    component: HeroSection,
} as Meta;

const Template: Story<HeroSectionProps> = (args) => {
    return <HeroSection {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    ...defaultHeroSection,
};
