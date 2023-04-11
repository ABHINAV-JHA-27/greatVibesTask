import axios from "axios";
import { useState } from "react";

const CreateForm = ({ visible, close }) => {
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [industry, setIndustry] = useState("");
    const [location, setLocation] = useState("");
    const [remoteType, setRemoteType] = useState("");
    const [minExperience, setMinExperience] = useState("");
    const [maxExperience, setMaxExperience] = useState("");
    const [minSalary, setMinSalary] = useState("");
    const [maxSalary, setMaxSalary] = useState("");
    const [totalEmployees, setTotalEmployees] = useState("");
    const [applyType, setApplyType] = useState("");

    const [jobTitleError, setJobTitleError] = useState(false);
    const [companyNameError, setCompanyNameError] = useState(false);
    const [industryError, setIndustryError] = useState(false);

    const [showForm2, setShowForm2] = useState(false);

    const handleNext = () => {
        if (jobTitle === "") {
            setJobTitleError(true);
        } else {
            setJobTitleError(false);
        }
        if (companyName === "") {
            setCompanyNameError(true);
        } else {
            setCompanyNameError(false);
        }
        if (industry === "") {
            setIndustryError(true);
        } else {
            setIndustryError(false);
        }

        if (jobTitle !== "" && companyName !== "" && industry !== "") {
            setShowForm2(true);
        }
    };

    const handleSubmit = async () => {
        await axios
            .post(
                `https://64345dd51c5ed06c9595de94.mockapi.io/api/job`,
                JSON.stringify({
                    jobTitle: jobTitle,
                    companyName: companyName,
                    industry: industry,
                    location: location,
                    remoteType: remoteType,
                    minExperience: minExperience,
                    maxExperience: maxExperience,
                    minSalary: minSalary,
                    maxSalary: maxSalary,
                    totalEmployees: totalEmployees,
                    applyType: applyType,
                })
            )
            .then(() => {
                close();
            });
    };

    if (!visible) return null;
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            {showForm2 ? (
                <div className="flex bg-white w-[40vw] h-[70vh] border-[1px] border-[#E6E6E6] rounded-[10px] m-2 flex-col relative top-20 mx-auto">
                    <div className="flex flex-row w-[96%] ml-4 mt-5 items-center">
                        <div className="flex w-[50%]">
                            <span className="text-base font-medium text-black font-[poppins]">
                                Create a Job
                            </span>
                        </div>
                        <div className="flex w-[50%]">
                            <span className="text-sm font-medium text-black font-[poppins]">
                                Step 2
                            </span>
                        </div>
                    </div>
                    <div className="mt-1 flex flex-col">
                        <div className="mt-4">
                            <div className="ml-4">
                                <span className="text-sm font-medium text-black font-[poppins]">
                                    Experience
                                </span>
                            </div>
                            <div className="mx-4 mt-1 flex flex-row w-[100%] space-x-14">
                                <input
                                    placeholder="Minimum"
                                    value={minExperience}
                                    onChange={(e) =>
                                        setMinExperience(e.target.value)
                                    }
                                    className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[42%]"
                                />
                                <input
                                    placeholder="Maximum"
                                    value={maxExperience}
                                    onChange={(e) =>
                                        setMaxExperience(e.target.value)
                                    }
                                    className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[42%]"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="ml-4">
                                <span className="text-sm font-medium text-black font-[poppins]">
                                    Salary
                                </span>
                            </div>
                            <div className="mx-4 mt-1 flex flex-row w-[100%] space-x-14">
                                <input
                                    placeholder="Minimum"
                                    value={minSalary}
                                    onChange={(e) =>
                                        setMinSalary(e.target.value)
                                    }
                                    className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[42%]"
                                />
                                <input
                                    placeholder="Maximum"
                                    value={maxSalary}
                                    onChange={(e) =>
                                        setMaxSalary(e.target.value)
                                    }
                                    className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[42%]"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="ml-4">
                                <span className="text-sm font-medium text-black font-[poppins]">
                                    Total Employees
                                </span>
                            </div>
                            <div className="mx-4 mt-1">
                                <input
                                    placeholder="ex. 100"
                                    value={totalEmployees}
                                    onChange={(e) =>
                                        setTotalEmployees(e.target.value)
                                    }
                                    className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[100%]"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="ml-4">
                                <span className="whitespace-nowrap text-sm font-medium text-black font-[poppins]">
                                    Apply Type
                                </span>
                            </div>
                            <div className="mt-1 flex flex-row">
                                <div className="flex items-center mx-4">
                                    <input
                                        type="radio"
                                        value="Quick Apply"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        checked={applyType === "Quick Apply"}
                                        onChange={setApplyType}
                                    />
                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Quick Apply
                                    </label>
                                </div>
                                <div className="flex items-center mx-4">
                                    <input
                                        type="radio"
                                        value="External Apply"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        checked={applyType === "External Apply"}
                                        onChange={setApplyType}
                                    />
                                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        External Apply
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse mx-4 mt-[12vh]">
                        <button
                            className="bg-[#1597E4] rounded-[5px] p-2 w-[6vw] text-center text-white font-normal font-[poppins] font-medium text-base"
                            onClick={handleSubmit}
                        >
                            Save
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className={
                        "flex bg-white w-[40vw] h-[70vh] border-[1px] border-[#E6E6E6] rounded-[10px] m-2 flex-col relative top-20 mx-auto"
                    }
                >
                    <div
                        className={
                            "flex flex-row w-[96%] ml-4 mt-5 items-center"
                        }
                    >
                        <div className={"flex w-[50%]"}>
                            <span
                                className={
                                    "text-base font-medium text-black font-[poppins]"
                                }
                            >
                                Create a Job
                            </span>
                        </div>
                        <div className={"flex w-[50%]"}>
                            <span
                                className={
                                    "text-sm font-medium text-black font-[poppins]"
                                }
                            >
                                Step 1
                            </span>
                        </div>
                    </div>
                    <div className={"mt-1 flex flex-col"}>
                        <div className={"mt-4"}>
                            <div className={"ml-4"}>
                                <span
                                    className={
                                        "text-sm font-medium text-black font-[poppins]"
                                    }
                                >
                                    Job Title
                                </span>
                            </div>
                            <div className={"mx-4 mt-1"}>
                                <input
                                    placeholder="ex. UX UI Designer"
                                    value={jobTitle}
                                    onChange={(e) =>
                                        setJobTitle(e.target.value)
                                    }
                                    className={`border-[1px] ${
                                        jobTitleError
                                            ? "border-[#ff0000]"
                                            : "border-[#E6E6E6]"
                                    } rounded-[5px] p-1 w-[100%]`}
                                />
                            </div>
                        </div>
                        <div className={"mt-4"}>
                            <div className={"ml-4"}>
                                <span
                                    className={
                                        "text-sm font-medium text-black font-[poppins]"
                                    }
                                >
                                    Company Name
                                </span>
                            </div>
                            <div className={"mx-4 mt-1"}>
                                <input
                                    placeholder="ex. Google"
                                    value={companyName}
                                    onChange={(e) =>
                                        setCompanyName(e.target.value)
                                    }
                                    className={`border-[1px] ${
                                        companyNameError
                                            ? "border-[#ff0000]"
                                            : "border-[#E6E6E6]"
                                    } rounded-[5px] p-1 w-[100%]`}
                                />
                            </div>
                        </div>
                        <div className={"mt-4"}>
                            <div className={"ml-4"}>
                                <span
                                    className={
                                        "text-sm font-medium text-black font-[poppins]"
                                    }
                                >
                                    Industry
                                </span>
                            </div>
                            <div className={"mx-4 mt-1"}>
                                <input
                                    placeholder="ex. Information Technology"
                                    value={industry}
                                    onChange={(e) =>
                                        setIndustry(e.target.value)
                                    }
                                    className={`border-[1px] ${
                                        industryError
                                            ? "border-[#ff0000]"
                                            : "border-[#E6E6E6]"
                                    } rounded-[5px] p-1 w-[100%]`}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-row mt-4 mx-4 space-x-14"}>
                            <div className={"flex flex-col w-[45%]"}>
                                <div className={""}>
                                    <span
                                        className={
                                            "text-sm font-medium text-black font-[poppins]"
                                        }
                                    >
                                        Location
                                    </span>
                                </div>
                                <div className={"mt-1"}>
                                    <input
                                        placeholder="ex. Chennai"
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                        className={
                                            "border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[100%]"
                                        }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-[45%]">
                                <div className="">
                                    <span className="whitespace-nowrap text-sm font-medium text-black font-[poppins]">
                                        Remote Type
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <input
                                        placeholder="ex. In-office"
                                        value={remoteType}
                                        onChange={(e) =>
                                            setRemoteType(e.target.value)
                                        }
                                        className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[100%]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse mx-4 mt-[12vh]">
                        <button
                            className="bg-[#1597E4] rounded-[5px] p-2 w-[6vw] text-center text-white font-normal font-[poppins] font-medium text-base"
                            onClick={() => {
                                handleNext();
                            }}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateForm;
