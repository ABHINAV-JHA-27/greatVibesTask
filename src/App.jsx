import JobCard from "@/components/JobCard";
import "./app.css";
import CreateForm from "./components/CreateForm";
import { useState } from "react";

function App() {
    const [createJobDialog, setCreateJobDialog] = useState(false);
    return (
        <div className="fixed bg-[#D8D8D8] flex flex-col h-full w-full">
            <div className="flex flex-row w-[100%] h-[5vh] items-end justify-end">
                <button
                    className="bg-[#1597E4] rounded-[5px] p-1 text-white mr-2"
                    onClick={() => {
                        setCreateJobDialog(true);
                    }}
                >
                    Add Job
                </button>
            </div>
            <div className="flex flex-row flex-wrap w-[100%] justify-around gap-y-5">
                <JobCard />
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
            <CreateForm visible={createJobDialog} />
        </div>
    );
}

export default App;
