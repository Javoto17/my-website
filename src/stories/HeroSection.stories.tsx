import { Meta, Story } from '@storybook/react';

import HeroSection from '../components/HeroSection';
import type { HeroSectionProps } from '../components/HeroSection';

const defaultHeroSection: HeroSectionProps = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vehicula, ex ac pulvinar mollis, nibh elit euismod mauris, id ullamcorper augue tellus vitae ligula. Sed blandit feugiat eleifend. Suspendisse blandit neque eu lectus finibus ultricies. Etiam tempor ut erat vitae euismod. Phasellus finibus nunc tempor nunc rutrum, id venenatis risus porttitor. In sollicitudin ipsum vitae tincidunt eleifend. Aliquam id luctus quam. Fusce quis velit purus. Aenean a leo a mi bibendum efficitur. Curabitur fermentum, purus quis auctor rutrum, tellus sem venenatis quam, sed hendrerit ex tellus eget justo. Cras ante metus, aliquet eget sapien id, varius lobortis lectus. Curabitur ullamcorper ultrices purus sed faucibus. Nam euismod dui vitae tortor commodo rhoncus. Suspendisse porta, erat eget aliquam imperdiet, nibh tellus ultricies mauris, eget ultricies diam dolor et justo.',
};

export default {
    title: 'my-website/HeroSection',
    component: HeroSection,
} as Meta;

const Template: Story<HeroSectionProps> = (args) => {
    return <HeroSection {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    ...defaultHeroSection,
};
