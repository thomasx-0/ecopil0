import React from 'react';

export const Downloader = () => {
  const downloadResume = async () => {
    try {
      const response = await fetch('/REDUCING-YOUR-CARBON-FOOTPRINT.pdf');
      if (response.status !== 200) {
        console.log('Error:', response.statusText);
        return;
      }
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'REDUCING-YOUR-CARBON-FOOTPRINT.pdf';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download failed:', err);
    }
  };

  return (
    <button
      onClick={downloadResume}
      type="button"
      className={"mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0"}
    >
     Download Resource
    </button>
  );
};

export default Downloader;