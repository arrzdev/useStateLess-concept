"use client";

import React, { useState } from 'react';
import { SearchIcon } from '@/lib/icons/SearchIcon';

interface ISearchBar {
  properties: {
    inputValue: string;
    setInputValue: (name: string) => void;
  };
}

const SearchBar: React.FC<ISearchBar> = ({properties}) => {
  const [showClearButton, setShowClearButton] = useState(false);

  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    properties.setInputValue(value);
    if (value.length > 0) {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }
  };

  const clearInput = () => {
    properties.setInputValue('');
    setShowClearButton(false);
  };

  return (
    <div className="flex items-center px-2 py-2 bg-[#16181A] rounded-lg border-solid border-2 border-[#ffffff26] text-[#9BA1A6] font-semibold text-lg text-left">
      <SearchIcon width={35} className="p-1" />
      <input
        type="text"
        placeholder="Add or search friends"
        className="bg-transparent pl-1"
        value={properties.inputValue}
        onChange={(e) => inputOnChange(e)}
      />
      {showClearButton && (
        <button
          className="text-[#9BA1A6] font-semibold text-lg rounded-full border-solid border-2 border-[#ffffff26] w-8 h-8 ml-auto pb-1 text-center align-middle"
          onClick={clearInput}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SearchBar;