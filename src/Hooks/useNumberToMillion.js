import React from 'react';

const useNumberToMillion = () => {
    const formatDownloads = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  } else {
    return num.toString();
  }
};

    return {formatDownloads}
};

export default useNumberToMillion;