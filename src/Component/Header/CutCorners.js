import React from 'react';

const CutCorners = ({ value, onChange }) => {
  const containerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const inputStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '8px 12px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'transparent',
  };

  return (
    <div style={containerStyle}>
      <svg width="100%" height="100%">
        <path
          fill="#F7F7FF"
          stroke="#e8e8f0"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default CutCorners;
