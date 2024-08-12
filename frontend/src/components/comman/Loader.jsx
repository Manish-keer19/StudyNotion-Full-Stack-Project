import React from "react";

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;
