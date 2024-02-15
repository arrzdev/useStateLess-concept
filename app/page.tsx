"use client";

import React, { useEffect, useState } from "react"

import { capitalizeText } from "@/lib/utils/functions"

// components
import NetworkCard from "@/lib/components/cards/NetworkCard"
import SearchBar from "@/lib/components/general/SearchBar"
import BasicButton from "@/lib/components/buttons/BasicButton"
import NavigationButton from "@/lib/components/buttons/NavigationButton"
import NavigationGroup from "@/lib/components/general/NavigationGroup";

// icons
import { HomeIcon } from "@/lib/icons/HomeIcon"
import { SearchIcon } from "@/lib/icons/SearchIcon";
import { GalleryIcon } from "@/lib/icons/GalleryIcon";
import { ProfileIcon } from "@/lib/icons/ProfileIcon"

interface IUser {
  username: string;
  role: string;
  avatar: string;
}

interface IUserNetwork {
  initUsers: IUser[];
  filteredUsers: IUser[];
}

const Home = () => {
  // search state
  const [searchText, setSearchText] = useState<string>("");

  // network state
  const [network, setNetwork] = useState<IUserNetwork>({
    initUsers: [],
    filteredUsers: [],
  });

  // fetch users on mount
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const users = await getOtherUsers();
  //     setNetwork({
  //       initUsers: users,
  //       filteredUsers: users,
  //     });
  //   }
  //   fetchUsers();
  // }, []);

  // filter users based on search state
  useEffect(() => {
    const filteredUsers = network.initUsers.filter((user: any) => user.username.toLowerCase().includes(searchText.toLowerCase()));

    // update network state
    setNetwork({
      ...network,
      filteredUsers,
    });

  }, [searchText]);


  return (
    <div className="mb-14 p-6 text-center">
      <div className="space-y-4">
        <h1 className="text-white text-left font-bold text-lg">Example of search bar</h1>
        <SearchBar 
          properties={{
            inputValue: searchText,
            setInputValue: setSearchText,
          }}
        />
        <h1 className="text-white text-left font-bold text-lg">Example of networking card</h1>
        <div className="space-y-2">
          {
            network.filteredUsers.map((user, index) => (
              <NetworkCard 
                key={index}
                meta={{
                  name: capitalizeText(user.username),
                  bio: "quack bio",
                  tag: user.role,
                  avatar: user.avatar,
                }}
                properties={{
                  isSubmitting: false,
                  // onClick: () => console.log("NetworkCard clicked"),
                  textMaxLength: 60,
                }}
              />
            ))
          }
        </div>

        <h1 className="text-white text-left font-bold text-lg">Example of a Basic Button with State</h1>
        <BasicButton 
          properties={{
            // onClick: () => console.log("BasicButton clicked"),
            isSubmitting: false,
          }}  
          className="w-full p-2"
        >
          Teste
        </BasicButton>

        <h1 className="text-white text-left font-bold text-lg">Example of Navigation Button</h1>
        <NavigationButton 
          meta={{
            text: "Home",
            icon: <HomeIcon width={25}/>,
            redirectPath: "/teste",
          }}
        />

        <h1 className="text-white text-left font-bold text-lg">Example of Navigation Group</h1>
        <NavigationGroup 
          meta={[
            {
              text: "Home",
              icon: <HomeIcon width={25}/>,
              redirectPath: "/",
            },
            {
              text: "Search",
              icon: <SearchIcon width={25}/>,
              redirectPath: "/search",
            },
            {
              text: "Gallery",
              icon: <GalleryIcon width={25}/>,
              redirectPath: "/gallery",
            }
          ]}
        />

        <NavigationButton
          meta={{
            text: "Profile",
            icon: <ProfileIcon width={25}/>,
            redirectPath: "/profile",
          }}
        />

      </div>
    </div>
  )
}

export default Home