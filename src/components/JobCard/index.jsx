import React from "react";
import logo from "../../assets/logo.png";

const JobCard = () => {
    return (
        <div className="flex bg-white w-[43vw] h-[33vh] border-[1px] border-[#DADEDF] rounded-[10px] m-2">
            <div className="flex flex-row w-[100%] m-2">
                <div className="flex flex-col w-[12%] border-[1px]">
                    <img
                        src={logo}
                        className="w-[3vw] h-[3vw] self-center m-1"
                    />
                </div>
                <div className="flex-col w-[88%] border-[1px]">
                    <span className="text-base font-normal text-black font-[poppins]">
                        UX UI Designer
                    </span>
                    <br />
                    <span className="text-sm font-normal text-black font-[poppins]">
                        Great Vibes - Information Technology
                    </span>
                    <br />
                    <span className="text-sm font-normal text-[#646464] font-[poppins]">
                        Chennai, Tamil Nadu, India (In-office)
                    </span>
                    <br />
                    <span className="text-sm font-normal text-black font-[poppins]">
                        Part-Time (9.00 am - 5.00 pm IST)
                    </span>
                    <br />
                    <span className="text-sm font-normal text-black font-[poppins]">
                        Experience (1 - 2 years)
                    </span>
                    <br />
                    <span className="text-sm font-normal text-black font-[poppins]">
                        INR (₹) 30,000 - 50,000 / Month
                    </span>
                    <br />
                    <span className="text-sm font-normal text-black font-[poppins]">
                        51-200 employees
                    </span>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
