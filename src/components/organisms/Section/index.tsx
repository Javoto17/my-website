import React from 'react';
import clsx from 'clsx';

export interface ContainerProps
    extends React.ComponentPropsWithoutRef<'section'> {}

const Section: React.FC<ContainerProps> = ({ children, className }) => {
    return <section className={clsx('py-16', className)}>{children}</section>;
};

export default Section;
