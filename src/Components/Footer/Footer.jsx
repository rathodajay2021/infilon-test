import CustomButton from "common/CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import React from "react";

const Footer = () => {
  return (
    <div className="px-40 laptop:px-20 bg-primary text-white pb-5">
      <div className="grid grid-cols-5 gap-2 laptop:grid-cols-3 tablet:grid-cols-1 laptop:gap-6 mb-10">
        <div className="col-span-1">
          <div className="flex gap-[10px] items-center mobile:justify-center">
            <img src="Icons/logo.png" width={40} className="h-10" alt="Logo" />
            <p className="text-[36px] font-bold laptop:text-[26px]">
              whitepace
            </p>
          </div>
          <p className="text-[18px] mobile:text-center">
            whitepace was created for the new ways we live and work. We make
            beautyfully designed around the world
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <p className="text-[18px] font-bold leading-[21px] mobile:text-center">
            Product
          </p>
          <p className="text-[18px] leading-[30px] mobile:text-center">
            Overview
          </p>
          <p className="text-[18px] leading-[30px] mobile:text-center">
            Pricing
          </p>
          <p className="text-[18px] leading-[30px] mobile:text-center">
            Customer stories
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <p className="text-[18px] font-bold leading-[21px] mobile:text-center">
            Resources
          </p>
          <p className="text-[18px] leading-[30px] mobile:text-center">Blog</p>
          <p className="text-[18px] leading-[30px] mobile:text-center">
            Guides & tutorials
          </p>
          <p className="text-[18px] leading-[30px] mobile:text-center">
            Help center
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <p className="text-[18px] font-bold leading-[21px] mobile:text-center">
            Company
          </p>
          <p className="text-[18px] leading-[30px] mobile:text-center">
            About us
          </p>
          <p className="text-[18px] leading-[30px] mobile:text-center">
            Careers
          </p>
          <p className="text-[18px] leading-[30px] mobile:text-center">
            Media kit
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-2">
          <p className="text-[36px] font-bold mobile:text-center laptop:text-[26px]">
            Try It Today
          </p>
          <p className="mobile:text-center">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <CustomButton className="bg-primary-200 mt-4 tablet:mx-auto tablet:mt-8 w-fit">
            Try Whitepace free <FaArrowRight />
          </CustomButton>
        </div>
      </div>
      <div className="bg-gray-500 w-full h-[2px] my-10 tablet:hidden"></div>
      <div className="flex justify-between tablet:flex-col tablet:justify-start">
        <div className="flex gap-10 mobile:flex-col">
          <select name="" id="" className="bg-transparent w-fit mx-auto">
            <option value="en" className="text-black">
              English
            </option>
            <option value="hi" className="text-black">
              Hindi
            </option>
          </select>
          <p className="mobile:text-center">Terms & privacy</p>
          <p className="mobile:text-center">Security</p>
          <p className="mobile:text-center">©2021 Whitepace LLC.</p>
        </div>
        <div className="bg-gray-500 w-full h-[2px] my-10 tablet:block hidden"></div>
        <div className="flex gap-5">
          <img src="Icons/facebook.png" width={15} height={25} alt="facebook icon" />
          <img src="Icons/Twitter.png" width={15} height={25} alt="Twitter icon" />
          <img src="Icons/Linkedin.png" width={15} height={15} alt="Linkedin icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
