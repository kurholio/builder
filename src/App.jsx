import React from 'react';

function App() {
  console.log('App component rendering...');
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(255,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '48px',
      color: 'white',
      zIndex: 9999
    }}>
      🚨 MINIMAL APP TEST 🚨
    </div>
  );
}

export default App;