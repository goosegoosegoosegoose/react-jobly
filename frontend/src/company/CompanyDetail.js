import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api"
import JobCard from "../jobs/JobCard";

const CompanyDetail = ({apply}) => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);


  useEffect(() => {
    const fetchCompany = async () => {
      const res = await JoblyApi.getCompany(handle);
      setCompany(res);
    }
    fetchCompany();
  }, []);

  if (!company) {
    return (
      <p>Data is loading...</p>
    );
  }

  return (
    <div>
      <h4>{company.name}</h4>
      <p>{company.description}</p>
        {company.jobs.map((job) => {
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

export default CompanyDetail;
