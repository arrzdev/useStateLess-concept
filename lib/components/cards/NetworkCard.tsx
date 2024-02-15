import React from 'react'
import { truncateText } from '@/lib/utils/functions'
import BasicButton from '../buttons/BasicButton'

interface INetworkCard {
  meta: {
    name: string;
    tag: string;
    avatar: string;
    bio: string;
  }
  properties: {
    onClick?: () => void;
    isSubmitting?: boolean;
    textMaxLength?: number;
  }
}

const NetworkCard:React.FC<INetworkCard> = ({meta, properties}) => {
  return (
    <div className="flex items-center p-4 bg-[#16181A] rounded-lg border-solid border-2 border-[#ffffff26]">
      <img className="w-14 h-14 rounded-full mr-4" src={meta.avatar} alt="User avatar"/>
      <div className="p-1 text-left">
        <p className="font-bold text-[#ECEDEE]">{meta.name}</p>
        <p className="text-[#697177] font-medium">{meta.tag}</p>
        <p className="text-[#9BA1A6] text-sm max-w-[200px]">{truncateText(meta.bio, properties.textMaxLength || 75)}</p>
      </div>
      
      <BasicButton 
        className="px-2 py-1 rounded-md bg-[#ffffff26] ml-auto text-sm font-bold text-white"
        properties={{
          // onClick: () => properties.onClick(),
          isSubmitting: properties.isSubmitting || false,
        }}
      >
        ADD
      </BasicButton>
    </div>
  )
}

export default NetworkCard