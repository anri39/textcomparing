import { useState, useEffect } from "react";
import "./LoadingComponent.css";

interface LoadingComponentProps {
  isVisible: boolean;
  onComplete: () => void;
}

export default function LoadingComponent({
  isVisible,
  onComplete,
}: LoadingComponentProps) {
  const [progress, setProgress] = useState(30);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShowLoading(true);
      setProgress(30);

      const timer = setTimeout(() => {
        setProgress(100);

        const hideTimer = setTimeout(() => {
          setShowLoading(false);
          onComplete();
        }, 800);

        return () => clearTimeout(hideTimer);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!showLoading) return null;

  return (
    <div className="loading-overlay">
      <div className="loading-container">
        <div className="loading-header">
          <div className="decorative-circle">
            <div className="circle-dot"></div>
          </div>
          <div className="loading-message">
            Converting...Thank you For your Patience
          </div>
        </div>
        <div className="progress-section">
          <div className="progress-text">{progress}%</div>
          <div className="progress-bar-container">
            <div 
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
