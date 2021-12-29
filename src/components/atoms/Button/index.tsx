import clsx from 'clsx';

import ArrowRight from '../../icons/ArrowRight';

import styles from './styles.module.css';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'medium' | 'small' | 'large';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    size = 'large',
    variant = 'primary',
    className,
    ...props
}) => {
    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                className
            )}
            {...props}
        >
            {children}

            {variant === 'outline' && (
                <span className={styles.arrow}>
                    <ArrowRight />
                </span>
            )}
        </button>
    );
};

export default Button;
