import CustomButton from "common/CustomButton";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="bg-primary px-40 laptop:px-20 pt-4 mb-0">
      <div className="text-white flex items-center justify-between gap-3">
        <div className="flex gap-[10px] items-center mobile:justify-center">
          <img src="Icons/logo.png" width={20} className="h-5" alt="Logo" />
          <p className="text-[36px] font-bold laptop:text-[26px]">whitepace</p>
        </div>
        <div className="flex gap-3 items-center">
          <select
            name=""
            id=""
            className="bg-transparent w-fit mx-auto laptop:hidden"
          >
            <option value="en" className="text-black">
              Products
            </option>
          </select>
          <select
            name=""
            id=""
            className="bg-transparent w-fit mx-auto laptop:hidden"
          >
            <option value="en" className="text-black">
              Solutions
            </option>
          </select>
          <select
            name=""
            id=""
            className="bg-transparent w-fit mx-auto laptop:hidden"
          >
            <option value="en" className="text-black">
              Resources
            </option>
          </select>
          <select
            name=""
            id=""
            className="bg-transparent w-fit mx-auto laptop:hidden"
          >
            <option value="en" className="text-black">
              Pricing
            </option>
          </select>

          <CustomButton className="bg-golden mt-4 tablet:mx-auto tablet:mt-8 tablet:hidden">
            login
          </CustomButton>
          <CustomButton className="bg-primary-200 mt-4 tablet:mx-auto tablet:mt-8 tablet:hidden">
            Try Whitepace free <FaArrowRight />
          </CustomButton>
          <IoMenu className="text-[22px] cursor-pointer hidden laptop:inline-block" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
