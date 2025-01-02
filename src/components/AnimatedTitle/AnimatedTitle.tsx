import React, { ReactNode } from 'react';

interface AnimatedTitleProps {
  title?: string | ReactNode;
  subTitle?: string | ReactNode;
  children?: ReactNode;
  autoheight?: boolean;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ 
  title = '', 
  subTitle = '', 
  children, 
  autoheight = false 
}) => {
  return (
    <div className={autoheight ? `animated-title-wrapper-autoheight` : `animated-title-wrapper`}>
      <div className="animated-title service-page-text-wrapper">
        <div className="text-top">
          <div className="title">
            {typeof title === 'string' ? title.toUpperCase() : title}
          </div>
        </div>
        <div className="text-bottom">
          <div className="service-page-subtitle">
            {typeof subTitle === 'string' ? subTitle.toUpperCase() : subTitle}
          </div>
        </div>
        <div className="animated-title-footer">
          {children}
        </div>
      </div>
    </div>
  );
};