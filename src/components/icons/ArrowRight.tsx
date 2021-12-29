import * as React from 'react';
import { SVGProps } from 'react';

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            d="M15.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L19.586 13H2.011A1.006 1.006 0 0 1 1 12c0-.552.453-1 1.011-1h17.575l-4.293-4.293Z"
            fill="currentColor"
        />
    </svg>
);

export default ArrowRight;
