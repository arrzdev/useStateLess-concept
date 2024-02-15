"use client";

import React from 'react'
import { RightArrowIcon } from '@/lib/icons/RightArrowIcon';
import { useRouter } from 'next/navigation';

interface INavigationButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  meta: {
    icon: React.ReactNode;
    text: string;
    redirectPath: string;
  }
}

const NavigationButton: React.FC<INavigationButton> = ({ meta, className }) => {
  const router = useRouter();

  const navigate = () => {
    router.push(meta.redirectPath)
    router.refresh()
  }

  return (
    <button 
      className={`flex justify-center items-center text-lg w-full pl-4 py-1 font-semibold leading-6 bg-[#16181A] rounded-lg border-solid border-2 border-[#ffffff26] text-white shadow-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 transition duration-200 ease-in-out focus-visible:outline-offset-2 text-center ${className}`}
      onClick={() => navigate()}
    >
      {meta.icon}
      <p className="pl-2 font-bold">{meta.text}</p>
      <RightArrowIcon className="ml-auto text-white" width={35}/>
    </button>
  )
}

export default NavigationButton