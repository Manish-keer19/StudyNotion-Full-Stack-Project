import React, { useRef } from 'react';

function FileUpload() {
  const fileInputRef = useRef(null);

  const handleFileSelect = () => {
    fileInputRef.current.click(); // Trigger the file input click event
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      // Handle file upload here
    }
  };

  return (
    <div className="file-upload">
      <label
        htmlFor="file-upload"
        className="p-3 bg-[#2c333f] text-[#c5c7d4] rounded-lg font-bold cursor-pointer"
      >
        Select
      </label>
      <input
        id="file-upload"
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden" // Hide the file input
      />
    </div>
  );
}

export default FileUpload;
