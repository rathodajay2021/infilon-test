import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import CustomButton from "common/CustomButton";

const HomePage = () => {
  return (
    <div className="w-full min-h-dvh bg-primary relative flex justify-center items-center border-2">
      <div className="bg-waves bg-center bg-cover bg-no-repeat h-3/4 w-full absolute bottom-11"></div>
      <div className="flex px-40 laptop:px-20 w-full tablet:flex-col tablet:items-center tablet:gap-20">
        <div className="text-white w-[60%] tablet:w-full tablet:text-center">
          <p className="text-[64px] font-bold leading-[75px] tablet:text-[54px] tablet:leading-[65.35px] mobile:text-[36px] mobile:leading-[43.57px]">
            Get More Done with whitepace
          </p>
          <p className="text-[18px] font-normal leading-[30px]">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <CustomButton className="bg-primary-200 mt-4 tablet:mx-auto tablet:mt-8">
            Try Whitepace free <FaArrowRight />
          </CustomButton>
        </div>
        <div className="w-[40%] tablet:w-full">
          <div className="bg-charts-img bg-contain bg-no-repeat w-[95%] tablet:w-full tablet:h-[30rem] h-96"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
