import React from "react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";
const Dropdown = () => {
  const [drop, setdrop] = useState(false);
  return (
    <div className="relative">
      <span
        className="cursor-pointer flex items-center justify-center gap-2 rounded-xl hover:shadow-xl hover:bg-slate-200 text-[15px] p-[0.5rem] dark:hover:bg-slate-500"
        onClick={() => setdrop(!drop)}
      >
        TOOLS
        <BsChevronDown />
      </span>
      {drop && (
        <div className="absolute z-50 bg-white shadow-lg p-2 rounded-lg top-12 w-[150px] flex items-start justify-center gap-3 flex-col *:w-full divide-y hover:*:bg-slate-200 divide-slate-500 *:p-1 dark:bg-slate-800 dark:hover:*:bg-slate-600 text-[16px]">
          <Link href="/upperlower">UpperLower</Link>
          <Link href="words-counter">Words-Counter</Link>
          <Link href="remove-space">Remove-Spacer</Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
