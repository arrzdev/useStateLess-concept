"use client";

import React from 'react'

// import { updateAvatar } from '@/lib/actions/user';
import { bufferToB64 } from '@/lib/utils/functions';
import { updateAvatar } from '@/lib/actions/user';

interface IProps {
  children: React.ReactNode;
  [key: string]: any;
}

const ProfileAvatarUpdate:React.FC<IProps> = ({children, ...props}) => {
  // function to handle file upload
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    const files = event.target.files;
    if (!files) return;
    const newFile: File = files[0];

    const updateCallback = await updateAvatar({
      name: newFile.name,
      mimeType: newFile.type,
      size: newFile.size / 1000000, // convert to MB
      b64Buffer: bufferToB64(await newFile.arrayBuffer())
    });

    console.log(newFile.size / 1000000)

    console.log("updateCallback", updateCallback)

    // if (updateCallback.status == "error") return console.log(updateCallback.message);
  }

  return (
    <div className={`${props.className} relative bg-white border hover:opacity-80 w-14 h-14 rounded-full overflow-hidden`}>
      <form action="">
        {children}
        <input
          type="file"
          className="absolute inset-0 opacity-0"
          onChange={(e) => handleFileUpload(e)}
        />
      </form>
    </div>

  )
}

export default ProfileAvatarUpdate