import CustomButton from "common/CustomButton";
import React from "react";

const Plan = () => {
  return (
    <div className="px-40 laptop:px-20 my-12">
      <div className="flex flex-col items-center">
        <div className="relative">
          <p className="text-[46px] text-center font-bold">Choose Your Plan</p>
          <img
            src="Icons/Element.png"
            width={170}
            height={40}
            className="absolute bottom-0 right-1/2 translate-x-1/2"
            alt=""
          />
        </div>
        <p className="text-center w-1/2 tablet:w-full">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className="flex gap-3 justify-between items-center mt-6">
        <div className="border-2 w-[32%] rounded-lg p-4">
          <p>Free</p>
          <p className="my-4 text-[24px] font-bold">$0</p>
          <div className="flex gap-5 flex-col">
            <p>Capture ideas and find them quickly</p>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>10 GB monthly uploads</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>200 MB max. note size</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Connect primary Google Calendar account</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Add due dates, reminders, and notifications to your tasks</p>
            </div>
          </div>
          <CustomButton className="border-2 border-golden mt-2">
            Get Started
          </CustomButton>
        </div>
        <div className="border-2 bg-primary text-white w-[32%] rounded-lg p-4 py-10">
          <p className="text-[24px]">Personal</p>
          <p className="text-golden my-4 text-[24px] font-bold">$11.99</p>
          <div className="flex gap-5 flex-col">
            <p>Keep home and family on track</p>
            <div className="flex items-center gap-3">
              <img
                src="Icons/right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>10 GB monthly uploads</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>200 MB max. note size</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Connect primary Google Calendar account</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Add due dates, reminders, and notifications to your tasks</p>
            </div>
          </div>
          <CustomButton className="bg-primary-200 mt-2">
            Get Started
          </CustomButton>
        </div>
        <div className="border-2 w-[32%] rounded-lg p-4">
          <p>Organization</p>
          <p className="my-4 text-[24px] font-bold">$0</p>
          <div className="flex gap-5 flex-col">
            <p>Capture ideas and find them quickly</p>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>10 GB monthly uploads</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>200 MB max. note size</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Connect primary Google Calendar account</p>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="Icons/black-right.png"
                alt="right tick"
                width={15}
                height={15}
              />
              <p>Add due dates, reminders, and notifications to your tasks</p>
            </div>
          </div>
          <CustomButton className="border-2 border-golden mt-2">
            Get Started
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Plan;
