import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button from '../components/atoms/Button';
import type { ButtonProps } from '../components/atoms/Button';

const defaultButton: ButtonProps = {
    children: 'Get Started',
    variant: 'primary',
    size: 'large',
};

const defaultParameters = {
    backgrounds: { default: 'cyan' },
};

export default {
    title: 'my-website/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return <Button {...args} />;
};

export const Default = Template.bind({});

Default.args = {
    ...defaultButton,
};

Default.parameters = {
    ...defaultParameters,
};

export const AllStates: Story<ButtonProps> = (args) => {
    return (
        <div className="grid gap-2">
            <Button {...args} />
            <Button {...args} variant="secondary" />
            <Button {...args} variant="outline" />
        </div>
    );
};

AllStates.args = {
    ...defaultButton,
};

AllStates.parameters = {
    ...defaultParameters,
};
