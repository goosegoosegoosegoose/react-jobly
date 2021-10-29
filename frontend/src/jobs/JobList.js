import React, {useState, useEffect} from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";
import SearchForm from "../common/SearchForm";

const JobList = ({apply}) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await JoblyApi.request("jobs");
      setJobs(res.jobs);
    }
    fetchJobs();
  }, []);

  const getJobs = (results) => {
    setJobs([...results.jobs]);
  };

  if (jobs.length === 0) {
    return (
      <div className="container text-center">
        <SearchForm type="jobs" header="title" get={getJobs} />
        <p>Sorry, no results were found!</p>
      </div>
    )
  };

  return (
    <div className="container text-center">
      <SearchForm type="jobs" header="title" get={getJobs} />
      {jobs.map(job => {
        return <JobCard 
          key={job.id}
          id={job.id}
          title={job.title} 
          salary={job.salary} 
          equity={job.equity} 
          apply={apply}
        />})}
    </div>
  )
}

export default JobList;