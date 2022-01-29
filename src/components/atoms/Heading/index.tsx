import React from 'react';

export interface HeadingProps
    extends React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h5' | 'h6'> {
    as?: React.ElementType;
    className?: string;
}

const Heading: React.FC<HeadingProps> = ({
    as: Component = 'h1',
    className,
    children,
    ...props
}) => {
    return (
        <Component className={className} {...props}>
            {children}
        </Component>
    );
};

export default Heading;
