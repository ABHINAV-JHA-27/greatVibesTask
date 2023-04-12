import axios from "axios";
import { useState } from "react";

const CreateForm = ({ visible, close, jobDialogData, edit }) => {
    const [jobTitle, setJobTitle] = useState(
        edit ? jobDialogData.jobTitle : ""
    );
    const [companyName, setCompanyName] = useState(
        edit ? jobDialogData.companyName : ""
    );
    const [industry, setIndustry] = useState(
        edit ? jobDialogData.industry : ""
    );
    const [location, setLocation] = useState(
        edit ? jobDialogData.location : ""
    );
    const [remoteType, setRemoteType] = useState(
        edit ? jobDialogData.remoteType : ""
    );
    const [minExperience, setMinExperience] = useState(
        edit ? jobDialogData.minExperience : ""
    );
    const [maxExperience, setMaxExperience] = useState(
        edit ? jobDialogData.maxExperience : ""
    );
    const [minSalary, setMinSalary] = useState(
        edit ? jobDialogData.minSalary : ""
    );
    const [maxSalary, setMaxSalary] = useState(
        edit ? jobDialogData.maxSalary : ""
    );
    const [totalEmployees, setTotalEmployees] = useState(
        edit ? jobDialogData.totalEmployees : ""
    );
    const [applyNow, setApplyNow] = useState(
        edit ? (jobDialogData.applyType == "Quick Apply" ? true : false) : false
    );
    const [applyExternal, setApplyExternal] = useState(
        edit
            ? jobDialogData.applyType == "External Apply"
                ? true
                : false
            : false
    );

    const [applyType, setApplyType] = useState(
        edit ? (jobDialogData.applyType == "Quick Apply" ? true : false) : false
    );
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

        console.log(jobTitle, companyName, industry);

        if (jobTitle !== "" && companyName !== "" && industry !== "") {
            setShowForm2(true);
        }
    };

    const handleSubmit = async () => {
        if (edit) {
            await axios
                .put(
                    `https://64345dd51c5ed06c9595de94.mockapi.io/api/job/${jobDialogData.id}`,
                    {
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
                    }
                )
                .then(() => {
                    close();
                });
        } else {
            await axios
                .post(`https://64345dd51c5ed06c9595de94.mockapi.io/api/job`, {
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
                .then(() => {
                    close();
                });
        }
    };

    if (!visible) return null;
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            {showForm2 ? (
                <div className="flex bg-white md:w-[40%] w-[90%] border-[1px] border-[#E6E6E6] rounded-[10px] m-2 flex-col relative top-20 mx-auto">
                    <div>
                        <div className="flex flex-row w-[96%] ml-4 mt-5 items-center">
                            <div className="flex w-[50%]">
                                <span className="text-base font-medium text-black font-[poppins]">
                                    {edit ? "Edit" : "Create a"} Job
                                </span>
                            </div>
                            <div className="flex w-[50%] justify-end mr-4">
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
                                <div className="mx-4 mt-1 flex flex-row w-[96%] gap-x-[3vw]">
                                    <input
                                        placeholder="Minimum"
                                        value={minExperience}
                                        onChange={(e) =>
                                            setMinExperience(e.target.value)
                                        }
                                        className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[45%]"
                                    />
                                    <input
                                        placeholder="Maximum"
                                        value={maxExperience}
                                        onChange={(e) =>
                                            setMaxExperience(e.target.value)
                                        }
                                        className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[45%]"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="ml-4">
                                    <span className="text-sm font-medium text-black font-[poppins]">
                                        Salary
                                    </span>
                                </div>
                                <div className="mx-4 mt-1 flex flex-row w-[96%] gap-x-[3vw]">
                                    <input
                                        placeholder="Minimum"
                                        value={minSalary}
                                        onChange={(e) =>
                                            setMinSalary(e.target.value)
                                        }
                                        className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[45%]"
                                    />
                                    <input
                                        placeholder="Maximum"
                                        value={maxSalary}
                                        onChange={(e) =>
                                            setMaxSalary(e.target.value)
                                        }
                                        className="border-[1px] border-[#E6E6E6] rounded-[5px] p-1 w-[45%]"
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
                                            checked={applyNow}
                                            onChange={() => {
                                                setApplyNow(true);
                                                if (applyExternal)
                                                    setApplyExternal(false);
                                                setApplyType("Quick Apply");
                                            }}
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
                                            checked={applyExternal}
                                            onChange={() => {
                                                setApplyExternal(true);
                                                if (applyNow)
                                                    setApplyNow(false);
                                                setApplyType("External Apply");
                                            }}
                                        />
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            External Apply
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse mx-4 mt-[12%] mb-[5%]">
                            <button
                                className="bg-[#1597E4] rounded-[5px] p-2 text-center text-white font-normal font-[poppins] font-medium text-base"
                                onClick={handleSubmit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className={
                        "flex bg-white  md:w-[40%] w-[90%] border-[1px] border-[#E6E6E6] rounded-[10px] m-2 flex-col relative top-20 mx-auto"
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
                                {edit ? "Edit" : "Create a"} Job
                            </span>
                        </div>
                        <div className={"flex w-[50%] justify-end mr-4"}>
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
                    <div className="flex flex-row-reverse mx-4 mt-[12%] mb-[5%]">
                        <button
                            className="bg-[#1597E4] rounded-[5px] p-2 text-center text-white font-normal font-[poppins] font-medium text-base"
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
