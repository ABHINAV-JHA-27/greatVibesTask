import React from "react";
import logo from "../../assets/logo.png";

const JobCard = () => {
    return (
        <div className="flex bg-white w-[43vw] h-[34vh] border-[1px] border-[#DADEDF] rounded-[10px] m-2 flex-col">
            <div className="flex flex-row w-[100%] m-2">
                <div className="flex flex-col w-[12%]">
                    <img
                        src={logo}
                        className="w-[3vw] h-[3vw] self-center m-1"
                    />
                </div>
                <div className="flex-col w-[88%]">
                    <div>
                        <span className="text-base font-normal text-black font-[poppins]">
                            UX UI Designer
                        </span>
                    </div>
                    <div>
                        <span className="text-sm font-normal text-black font-[poppins]">
                            Great Vibes - Information Technology
                        </span>
                    </div>
                    <div>
                        <span className="text-sm font-normal text-[#646464] font-[poppins]">
                            Chennai, Tamil Nadu, India (In-office)
                        </span>
                    </div>
                    <div className="mt-3">
                        <span className="text-sm font-normal text-black font-[poppins] ">
                            Part-Time (9.00 am - 5.00 pm IST)
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm font-normal text-black font-[poppins]">
                            Experience (1 - 2 years)
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm font-normal text-black font-[poppins]">
                            INR (₹) 30,000 - 50,000 / Month
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm font-normal text-black font-[poppins]">
                            51-200 employees
                        </span>
                    </div>
                    <div className="flex flex-row w-[100%] mt-4">
                        <div className="bg-[#1597E4] rounded-[5px] p-1">
                            <span className="text-white font-normal font-[poppins] font-medium text-sm">
                                Apply Now
                            </span>
                        </div>
                        <div className="bg-white border-[1px] border-[#1597E4] rounded-[5px] ml-3 p-1">
                            <span className="text-[#1597E4] font-normal font-[poppins] font-medium text-sm">
                                External Apply
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
