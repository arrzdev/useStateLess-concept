"use client";

import React from 'react'

interface IBasicButton extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  properties: {
    onClick?: () => void;
    isSubmitting?: boolean;
  }
}

const BasicButton: React.FC<IBasicButton> = ({ properties, className, children}) => {
  return (
    <>
      <button 
        onClick={() => properties && properties.onClick && properties.onClick()}
        disabled={properties && properties.isSubmitting} 
        className={`flex justify-center text-lg font-semibold leading-6 bg-[#16181A] rounded-lg border-solid border-2 border-[#ffffff26] text-white shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 transition duration-200 ease-in-out focus-visible:outline-offset-2 text-center ${properties?.isSubmitting && "cursor-not-allowed"} ${className}`}>
        {children}
        {properties && properties.isSubmitting && (
          <div className='translate-y-1/4 h-4 w-4 ml-3'>
            <svg className='animate-spin' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M222.7 32.1c5 16.9-4.6 34.8-21.5 39.8C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1c-16.9-5-26.6-22.9-21.5-39.8s22.9-26.6 39.8-21.5C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6c16.9-5 34.8 4.6 39.8 21.5z" />
            </svg>
          </div>
        )}  
      </button>
    </>
  )
}

export default BasicButton