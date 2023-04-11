import JobContext from "@/context/JobsContext";
import { useContext, useState } from "react";
import CreateForm from "./CreateForm";
import JobCard from "./JobCard";

const Layout = () => {
    const [createJobDialog, setCreateJobDialog] = useState(false);
    // const { jobs, setJobs } = useContext(JobContext);
    return (
        <div className="fixed bg-[#D8D8D8] flex flex-col h-full w-full">
            <div className="absolute m-2 right-0">
                <button
                    className="bg-[#1597E4] rounded-[5px] p-1 text-white mr-2"
                    onClick={() => {
                        setCreateJobDialog(true);
                    }}
                >
                    Add Job
                </button>
            </div>
            <div className="flex flex-row flex-wrap w-[100%] justify-around mt-8 gap-y-5 overflow-scroll">
                <JobCard
                    jobTitle={"UX UI Designer"}
                    companyName={"Great Vibes"}
                    industry={"Information Technology"}
                    location={"Chennai, Tamil Nadu, India (In-office)"}
                    remoteType={"Part-Time (9.00 am - 5.00 pm IST)"}
                    minExperience={"1"}
                    maxExperience={"3"}
                    minSalary={"50000"}
                    maxSalary={"100000"}
                    totalEmployees={"50-100"}
                    applyType={""}
                />
                <JobCard
                    jobTitle={"UX UI Designer"}
                    companyName={"Great Vibes"}
                    industry={"Information Technology"}
                    location={"Chennai, Tamil Nadu, India (In-office)"}
                    remoteType={"Part-Time (9.00 am - 5.00 pm IST)"}
                    minExperience={"1"}
                    maxExperience={"3"}
                    minSalary={"50000"}
                    maxSalary={"100000"}
                    totalEmployees={"50-100"}
                    applyType={""}
                />
                <JobCard
                    jobTitle={"UX UI Designer"}
                    companyName={"Great Vibes"}
                    industry={"Information Technology"}
                    location={"Chennai, Tamil Nadu, India (In-office)"}
                    remoteType={"Part-Time (9.00 am - 5.00 pm IST)"}
                    minExperience={"1"}
                    maxExperience={"3"}
                    minSalary={"50000"}
                    maxSalary={"100000"}
                    totalEmployees={"50-100"}
                    applyType={""}
                />
                <JobCard
                    jobTitle={"UX UI Designer"}
                    companyName={"Great Vibes"}
                    industry={"Information Technology"}
                    location={"Chennai, Tamil Nadu, India (In-office)"}
                    remoteType={"Part-Time (9.00 am - 5.00 pm IST)"}
                    minExperience={"1"}
                    maxExperience={"3"}
                    minSalary={"50000"}
                    maxSalary={"100000"}
                    totalEmployees={"50-100"}
                    applyType={""}
                />
                <JobCard
                    jobTitle={"UX UI Designer"}
                    companyName={"Great Vibes"}
                    industry={"Information Technology"}
                    location={"Chennai, Tamil Nadu, India (In-office)"}
                    remoteType={"Part-Time (9.00 am - 5.00 pm IST)"}
                    minExperience={"1"}
                    maxExperience={"3"}
                    minSalary={"50000"}
                    maxSalary={"100000"}
                    totalEmployees={"50-100"}
                    applyType={""}
                />
            </div>
            <CreateForm visible={createJobDialog} />
        </div>
    );
};

export default Layout;
