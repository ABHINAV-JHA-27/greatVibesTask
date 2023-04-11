import React from "react";
import logo from "../../assets/logo.png";

const JobCard = ({
    jobTitle,
    companyName,
    industry,
    location,
    remoteType,
    minExperience,
    maxExperience,
    minSalary,
    maxSalary,
    totalEmployees,
    applyType,
}) => {
    return (
        <div className="flex bg-white w-[43%] h-[34%] border-[1px] border-[#DADEDF] rounded-[10px] m-2 flex-col">
            <div className="flex flex-row w-[100%] m-2">
                <div className="flex flex-col w-[10%]">
                    <img
                        src={logo}
                        className="w-[3vw] h-[3vw] self-center m-1"
                    />
                </div>
                <div className="flex-col w-[80%]">
                    <div>
                        <span className="text-base font-normal text-black font-[poppins]">
                            {jobTitle}
                        </span>
                    </div>
                    <div>
                        <span className="text-sm font-normal text-black font-[poppins]">
                            {companyName} - {industry}
                        </span>
                    </div>
                    <div>
                        <span className="text-sm font-normal text-[#646464] font-[poppins]">
                            {location}
                        </span>
                    </div>
                    <div className="mt-3">
                        <span className="text-sm font-normal text-black font-[poppins] ">
                            {remoteType}
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm font-normal text-black font-[poppins]">
                            Experience {minExperience} - {maxExperience} years
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm font-normal text-black font-[poppins]">
                            INR (₹) {minSalary} - {maxSalary} / Month
                        </span>
                    </div>
                    <div className="mt-1">
                        <span className="text-sm font-normal text-black font-[poppins]">
                            {totalEmployees} employees
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
                <div className="flex-col w-[10%]"></div>
            </div>
        </div>
    );
};

export default JobCard;
