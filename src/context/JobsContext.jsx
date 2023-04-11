import React, { createContext, useState } from "react";

export const JobContext = createContext();

const JobsContext = ({ children }) => {
    const [jobs, setJobs] = useState([{}]);
    return (
        <JobContext.Provider value={{ jobs, setJobs }}>
            {children}
        </JobContext.Provider>
    );
};

export default JobsContext;
