import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // 500ms
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loader">
        <div className="ytp-spinner">
          <div className="ytp-spinner-container">
            <div className="ytp-spinner-rotator">
              <div className="ytp-spinner-left">
                <div className="ytp-spinner-circle"></div>
              </div>
              <div className="ytp-spinner-right">
                <div className="ytp-spinner-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
