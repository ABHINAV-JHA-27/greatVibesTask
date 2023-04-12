import axios from "axios";
import logo from "../../assets/logo.png";

const JobCard = ({
    id,
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
    setCreateJobDialog,
    setJobDialogData,
    setEdit,
    setLoading,
}) => {
    const handleEdit = () => {
        setJobDialogData({
            id,
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
        });
        setEdit(true);
        setCreateJobDialog(true);
    };
    const handleDelete = async () => {
        await axios.delete(
            `https://64345dd51c5ed06c9595de94.mockapi.io/api/job/${id}`
        );
        setLoading(true);
    };

    return (
        <div className="flex bg-white md:w-[47%] w-[90%] border-[1px] border-[#DADEDF] rounded-[10px] m-2 flex-col overflow-hidden">
            <div className="flex flex-row w-[98%] m-2">
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
                    {applyType == "both" ? (
                        <div className="flex flex-row w-[100%] mt-4">
                            <button className="bg-[#1597E4] rounded-[5px] p-1 text-white font-normal font-[poppins] font-medium text-sm">
                                Apply Now
                            </button>
                            <button className="bg-white border-[1px] border-[#1597E4] rounded-[5px] ml-3 p-1 text-[#1597E4] font-normal font-[poppins] font-medium text-sm">
                                External Apply
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-row w-[100%] mt-4">
                            <button className="bg-[#1597E4] rounded-[5px] p-1 text-white font-normal font-[poppins] font-medium text-sm">
                                {applyType}
                            </button>
                        </div>
                    )}
                </div>
                <div className="flex flex-col w-[8%] m-4">
                    <button onClick={handleEdit}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                            />
                        </svg>
                    </button>
                    <button onClick={handleDelete}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mt-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;
