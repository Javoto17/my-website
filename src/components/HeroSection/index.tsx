import React from 'react';
import Button from '../atoms/Button';

export interface HeroSectionProps {
    title: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title }) => {
    return (
        <div className="bg-slate-50	">
            <Button>hola</Button>
        </div>
    );
};

export default HeroSection;
