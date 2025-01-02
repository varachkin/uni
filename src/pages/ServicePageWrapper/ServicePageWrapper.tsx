import React, { ReactNode } from 'react';

interface ServicePageWrapperProps {
    children: ReactNode;
    className?: string
}

const ServicePageWrapper: React.FC<ServicePageWrapperProps> = ({ children, className = 'default' }) => {
    return (
        <div className={`service-page-wrapper ${className}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={`service-page-wrapper-children`}>
                {children}
            </div>
        </div>
    );
};

export default ServicePageWrapper;