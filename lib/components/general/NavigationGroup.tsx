import React from 'react'
import NavigationButton from '../buttons/NavigationButton';

interface INavigationGroup {
  meta: {
    text: string;
    icon: React.ReactNode;
    redirectPath: string;
  }[]
}

const NavigationGroup:React.FC<INavigationGroup> = ({meta}) => {
  return (
    <div className='text-[#9BA1A6] text-left font-semibold space-y-1 text-md uppercase text-sm tracking-wide'>
      <span className="pl-2">Features</span>
      <div>
        {meta.map((item, index) => (
          <NavigationButton key={index} meta={item} className={`${index == 0 ? "rounded-b-none": index == meta.length-1 ? "rounded-t-none": "rounded-t-none rounded-b-none border-y-0"}`}/>
        ))}
      </div>
    </div>
  )
}

export default NavigationGroup