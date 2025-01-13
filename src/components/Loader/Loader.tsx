import React from 'react';

type LoaderProps = {
    size?: number;
    variant?: string;
};

const Loader = ({size = 2, variant = 'color'}: LoaderProps) => {
    const loaderStyle: React.CSSProperties = {
        '--loader-size': `${size}vh`,
    } as React.CSSProperties & { '--loader-size': string };

    return (
        <div className='loader-wrapper'>
        <span
            className={`loader ${variant === 'color' ? '' : 'default'}`}
            style={loaderStyle}
        ></span>
        </div>
    );
};

export default Loader;
