import React from 'react';

export interface HeroSectionProps {
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
    return (
        <div className="bg-black">
            <h1 className="text-white">hello</h1>
        </div>
    );
};

export default HeroSection;
