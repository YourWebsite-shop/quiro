import React from "react";

const PerfectForBusiness: React.FC = () => {
  return (
    <div>
      perfect for businesses like yours
      <Box1 />
      <Box2 />
      <Box3 />
    </div>
  );
};

const Box1: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Perfect for Business</h1>
      <p className="text-lg">
        Your website should be visually appealing, easy to navigate, and easy to
        read. Here are some key features that make it perfect for businesses.
      </p>
    </div>
  );
};




const Box2: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Perfect for Business</h1>
      <p className="text-lg">
        Your website should be visually appealing, easy to navigate, and easy to
        read. Here are some key features that make it perfect for businesses.
      </p>
    </div>
  );
};




const Box3: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Perfect for Business</h1>
      <p className="text-lg">
        Your website should be visually appealing, easy to navigate, and easy to
        read. Here are some key features that make it perfect for businesses.
      </p>
    </div>
  );
};

export default PerfectForBusiness;
