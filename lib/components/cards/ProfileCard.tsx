import React from 'react'

import MongoImage from '@/lib/components/images/MongoImage';
import { capitalizeText } from '@/lib/utils/functions';

const ProfileCard = ({ user }:{user: any})  => {
  return (
    <div className="flex items-center py-2 px-4 bg-[#16181A] rounded-lg border-solid border-2 border-[#ffffff26]">
      {/* <MongoImage 
        imageId={user.avatar.toString()}
        className="w-14 h-14 rounded-full mr-4" 
        alt="User avatar" 
      /> */}
      <div className="p-1 text-left">
        <p className="font-bold text-[#ECEDEE]">{capitalizeText(user.username)}</p>
        <p className="text-[#697177] font-medium">{user.role}</p>
      </div>
    </div>
  )
}

export default ProfileCard