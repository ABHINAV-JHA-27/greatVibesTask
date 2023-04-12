import axios from "axios";
import { useEffect, useState } from "react";
import CreateForm from "./CreateForm";
import JobCard from "./JobCard";

const Layout = () => {
    const [createJobDialog, setCreateJobDialog] = useState(false);
    const [jobDialogData, setJobDialogData] = useState({});
    const [edit, setEdit] = useState(false);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios
            .get(`https://64345dd51c5ed06c9595de94.mockapi.io/api/job`)
            .then((res) => {
                setJobs(res.data);
            });
    }, []);

    return (
        <div className="fixed bg-[#D8D8D8] flex flex-col h-full w-full">
            <div className="absolute m-2 right-0">
                <button
                    className="bg-[#1597E4] rounded-[5px] p-2 text-white mr-2"
                    onClick={() => {
                        setCreateJobDialog(true);
                    }}
                >
                    Add Job
                </button>
            </div>
            <div className="flex flex-row flex-wrap w-[100%] justify-around mt-12 gap-y-5 overflow-scroll">
                {jobs.map((job) => {
                    return (
                        <JobCard
                            key={job.id}
                            id={job.id}
                            jobTitle={job.jobTitle}
                            companyName={job.companyName}
                            industry={job.industry}
                            location={job.location}
                            remoteType={job.remoteType}
                            minExperience={job.minExperience}
                            maxExperience={job.maxExperience}
                            minSalary={job.minSalary}
                            maxSalary={job.maxSalary}
                            totalEmployees={job.totalEmployees}
                            applyType={job.applyType}
                            setCreateJobDialog={setCreateJobDialog}
                            setJobDialogData={setJobDialogData}
                            setEdit={setEdit}
                        />
                    );
                })}
            </div>
            <CreateForm
                visible={createJobDialog}
                close={() => {
                    setCreateJobDialog(false);
                }}
                jobDialogData={jobDialogData}
                edit={edit}
            />
        </div>
    );
};

export default Layout;
