import React from 'react';

export interface ContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="container mx-auto">{children}</div>;
};

export default Container;
