import React from "react";
import "../../styles/skeleton.css";

const PageSkeleton = ({ variant = "default" }) => {
  const renderHeroSkeleton = () => (
    <div className="skeleton-section hero-skeleton">
      <div className="skeleton-container">
        <div className="skeleton-line skeleton-title"></div>
        <div className="skeleton-line skeleton-title short"></div>
        <div className="skeleton-line skeleton-subtitle"></div>
        <div className="skeleton-buttons">
          <div className="skeleton-button"></div>
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  );

  const renderCardGridSkeleton = () => (
    <div className="skeleton-section card-grid-skeleton">
      <div className="skeleton-container">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="skeleton-card">
            <div className="skeleton-card-header"></div>
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
            <div className="skeleton-line"></div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderListSkeleton = () => (
    <div className="skeleton-section list-skeleton">
      <div className="skeleton-container">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton-list-item">
            <div className="skeleton-line"></div>
            <div className="skeleton-line short"></div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-skeleton">
      {variant === "default" && (
        <>
          {renderHeroSkeleton()}
          {renderCardGridSkeleton()}
        </>
      )}
      {variant === "cards" && renderCardGridSkeleton()}
      {variant === "list" && renderListSkeleton()}
      {variant === "hero" && renderHeroSkeleton()}
    </div>
  );
};

export default PageSkeleton;
