import React from "react";

interface ButtonType {
  text: string;
}

const ShadowButton: React.FC<ButtonType> = ({ text }) => {
  return (
    <button className="bg-[#F5F3ED] border-2 border-[#00413E] text-center text-sm sm:text-base  shadow-[4px_4px_0_rgba(0,0,0,1)] sm:py-3 sm:px-10 px-8 py-2 rounded-lg flex items-center active:bg-[#E2E0D9] active:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none">
      {text}
    </button>
  );
};

export default ShadowButton;
