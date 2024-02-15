"use client";

import { logOut } from '@/lib/actions/auth';
import BasicButton from './BasicButton';

// This component is a wrapper for the BasicButton component that contains the logic to logout the user
const LogoutButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({children, className} ) => {
  return (
    <BasicButton 
      className={className} 
      properties={{
        onClick: () => logOut(),
      }}
    >
      {children}
    </BasicButton>
  )
}

export default LogoutButton