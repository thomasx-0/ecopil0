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
      className="rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >
     Download Resource
    </button>
  );
};

export default Downloader;