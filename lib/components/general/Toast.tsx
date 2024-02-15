"use client";

import React, { useState } from 'react';

//define setMessage earlier to be accessible from useToast
export let useToast: (message: string, timeout?: number) => void;

//define an external global timeout so that previous timeouts can be cleared
let toastTimeout: NodeJS.Timeout;

const Toast = () => {
  const [toastState, setToastState] = useState<string>('');

  useToast = (message: string, timeout=3) => {
    clearTimeout(toastTimeout);
    setToastState(message);

    // clear message after x (timeout) seconds
    toastTimeout = setTimeout(() => {
      setToastState('');
    }, timeout * 1000);
  }

  return (
    <div className="p-20 z-50 fixed top-0 left-0 right-0" style={{ display: toastState ? 'block' : 'none' }}>
      <div className="flex items-center p-4 bg-black rounded-lg border-solid border-2 border-red-600 text-white">
        {/* <div className="flex-shrink-0">
          {svg}
        </div> */}
        <div className="">
          <span>{toastState}</span>
        </div>
      </div>
    </div>
    // <div className="bg-white w-12 h-12 text-black absolute top-0" id="toast-root" style={{ display: toastState ? 'block' : 'none' }}>
    //   {toastState}
    // </div>
  );
};

export default Toast;
