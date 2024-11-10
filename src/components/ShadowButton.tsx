import React from "react";

interface ButtonType {
  text: string;
}

const ShadowButton: React.FC<ButtonType> = ({ text }) => {
  return (
    <button className="bg-[#F5F3ED] border-2 border-[#00413E] shadow-[4px_4px_0_rgba(0,0,0,1)] py-3 px-10 rounded-lg flex items-center active:bg-[#E2E0D9] active:shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none">
      {text}
    </button>
  );
};

export default ShadowButton;
