import React from 'react'

// components
import ProfileCard from '@/lib/components/cards/ProfileCard'
import LogoutButton from '@/lib/components/buttons/LogoutButton'
import ProfileAvatarUpdate from '@/lib/components/general/ProfileAvatarUpdate'

// icons
import { GalleryIcon } from '@/lib/icons/GalleryIcon'
import { HomeIcon } from '@/lib/icons/HomeIcon'
import { SearchIcon } from '@/lib/icons/SearchIcon'
import MongoImage from '@/lib/components/images/MongoImage'
import { getUser } from '@/lib/actions/user'
import NavigationGroup from '@/lib/components/general/NavigationGroup'

const ProfilePage = async () => {
  const user = await getUser();
  if (!user) return <div className='text-white'>Something went wrong</div>

  return (
    <div className="mb-14 p-6 text-center space-y-4">
      <ProfileCard user={user}/>
      <ProfileAvatarUpdate className="w-14 h-14 rounded-full">
        {/* @ts-ignore */}
        {user.avatarId && <MongoImage
          imageId={user.avatarId}
          alt="User Avatar"
          className="rounded-full object-cover w-14 h-14"
        />}
      </ProfileAvatarUpdate>
      
      <NavigationGroup
        meta={[ 
          {
            text: "Home",
            icon: <HomeIcon width={25} />,
            redirectPath: "/",
          },
          {
            text: "Search",
            icon: <SearchIcon width={25} />,
            redirectPath: "/search",
          },
          {
            text: "Gallery",
            icon: <GalleryIcon width={25} />,
            redirectPath: "/gallery",
          }
        ]}
      />
      <LogoutButton className="w-full p-3">
        Log Out
      </LogoutButton>
    </div>
  )
}

export default ProfilePage