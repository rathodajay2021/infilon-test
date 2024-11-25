import CustomButton from "common/CustomButton";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const FreeTrial = () => {
  return (
    <div className="px-40 laptop:px-20 w-full flex flex-col justify-center bg-primary text-white pb-20 gap-2">
      <p className="text-[72px] font-bold text-center">Try Whitepace today</p>
      <p className="text-[24px] text-center">
        Get started for free. Add your whole team as your needs grow.
      </p>
      <CustomButton className="bg-primary-200 mt-4 tablet:mx-auto tablet:mt-8 w-fit mx-auto">
        Try Whitepace free <FaArrowRight />
      </CustomButton>
      <p className="text-[24px] text-center">On a big team? Contact sales</p>
      <div className="flex gap-3 py-2 justify-center">
        <img src="Icons/apple.png" alt="apple icon" />
        <img src="Icons/windows.png" alt="windows icon" />
        <img src="Icons/android.png" alt="android icon" />
      </div>
    </div>
  );
};

export default FreeTrial;
