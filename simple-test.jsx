import React from 'react';

const SimpleTest = () => {
  console.log('SimpleTest component rendering...');
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,0,0,0.3)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
    }}>
      🎯 SIMPLE TEST COMPONENT IS WORKING! 🎯
    </div>
  );
};

export default SimpleTest;
