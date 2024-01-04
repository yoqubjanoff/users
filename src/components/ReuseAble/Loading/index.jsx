import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-t-4 border-blue-500 border-solid rounded-full h-40 w-40 animate-spin"></div>
    </div>
  );
};

export default Loading;
